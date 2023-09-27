const { users, user_details, user_address, user_contract, quote_credit } = require('../models');

const crediaService = new require("../services/CrediaService");
const { ClienteModel, DireccionModel,
    ContactoModel, InformacionAdicionalModel } = require("../model/clienteModel");
const { CreditoModel, ClienteCreditoModel } = require("../model/creditoModel");
const { Nacionalidad, Genero, EstadoCivil } = require("../enums/clienteEnum");

module.exports = {

    postCliente(req, res) {
        return crediaService.getToken()
            .then(async result => {
                let token = result.access_token;
                let cliente = await fillCliente(req.body.clickup_task);
                let insert = await postCliente(JSON.stringify(cliente));
                success(insert);
                res.status(200).send(cliente);
            }).catch(error => {
                console.log("----crediaService-error----", error);
                res.status(400).send(error);
            });
    },
    postCredito(req, res) {
        return crediaService.getToken()
            .then(async result => {
                let credito = await fillCredito(req.body.clickup_task);
                let insetCredito = { credito: credito };
                let insert = await postCredito(JSON.stringify(insetCredito));
                res.status(200).send(JSON.stringify(insert));
            }).catch(error => {
                console.log("----crediaService-error----", error);
                res.status(400).send(error);
            });
    }
};

async function fillCliente(_clickup_task) {
    return new Promise(async (success, error) => {
        let cliente = new ClienteModel();
        let direccion = new DireccionModel();
        let contacto = new ContactoModel();
        let informacionAdicional = new InformacionAdicionalModel();
        cliente.TipoFigura = "Fisica";
        cliente.Nacionalidad = Nacionalidad.Mexicano;

        users.findAll({
            where: { clickup_task: _clickup_task },
        }).then(async result => {
            const user = result[0];

            const user_detail = await user_details.findOne({
                where: { user_id: user.id },
            }).catch(err => { error(err); });

            const address = await user_address.findOne({
                where: { user_id: user.id },
            }).catch(err => { error(err); });

            cliente.ApellidoPaterno = user_detail.father_name;
            cliente.ApellidoMaterno = user_detail.mother_name;
            cliente.PrimerNombre = user_detail.first_name;
            cliente.SegundoNombre = user_detail.last_name;
            cliente.FechaDeNacimiento = user_detail.DOB;
            cliente.RFC = user_detail.RFC;
            cliente.CURP = user_detail.CURP;
            cliente.Genero = Genero[user_detail.gender];
            cliente.EstadoCivil = EstadoCivil[user_detail.marital_status];

            contacto.Correo = user.email;
            contacto.TelefonoCelular = user.phone;
            contacto.TelefonoFisico = user.phone;

            direccion.CodigoPostal = address.postcode;
            direccion.Pais = address.country;
            direccion.Estado = address.state;
            direccion.Municipio = address.town;
            direccion.Ciudad = address.town;
            direccion.Colonia = address.suburb;
            direccion.Calle = address.street;
            direccion.NumeroExterior = address.address_no;
            direccion.NumeroInterior = address.address_inside_no;

            cliente.Direccion = direccion;
            cliente.Contacto = contacto;
            cliente.InformacionAdicional = informacionAdicional;
            cliente.RepresentanteLegal = {};
            cliente.LugarNacimiento = {};
            console.log(cliente);
            success(cliente);
        }).catch(err => { error(err); });
    });
}

function postCliente(cliente) {
    return new Promise((success, error) => {
        crediaService.postCliente(cliente)
            .then((result) => {
                success(result);
            }, err => {
                console.log(err);
                error(err);
            }).catch(err => {
                error(err);
            });
    });
}

async function fillCredito(_clickup_task) {
    return new Promise(async (success, error) => {
        let credito = new CreditoModel();
        let cliente = new ClienteCreditoModel();

        users.findAll({
            where: { clickup_task: _clickup_task },
        }).then(async result => {
            const user = result[0];

            const user_detail = await user_details.findOne({
                where: { user_id: user.id },
            }).catch(err => { error(err); });

            const contract = await user_contract.findOne({
                where: { user_id: user.id },
            }).catch(err => { error(err); });

            const quote = await quote_credit.findOne({
                where: { user_id: user.id },
            }).catch(err => { error(err); });

            cliente.RFC = user_detail.RFC;

            credito.TipoPago = contract.frecuencia;
            credito.NoContrato = contract.numero_operacion;
            credito.TasaAnual = contract.tasa * 12;
            credito.TasaMoratoria = process.env.TasaMoratoria;
            credito.Plazos = quote.months;
            credito.FechaPrimerPago = contract.fecha_primer_pago;
            credito.MontoDisponer = quote.requested_amount_credit;

            credito.Cliente = cliente;

            success(credito);
        }).catch(err => { error(err); });
    });
}

function postCredito(credito) {
    return new Promise((success, error) => {
        crediaService.postCredito(credito)
            .then((result) => {
                success(result);
            }, err => {
                error(err);
            }).catch(err => {
                error(err);
            });
    });
}
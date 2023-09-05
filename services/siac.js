//import('../model/siacClientesModel');
var convert = require('xml-js');
const xml2js = require('xml2js');
const Utils = require('../libs/Utils');
const toSiac = require('../libs/catalogosSiac');
var fs = require('fs');

var request = require('request');
var UsersModel = require('../model/users');
var UserDetailsModel = require('../model/userDetails');
var UserAddressModel = require('../model/userAddress');
var QuoteCreditModel = require('../model/quoteCredit');
var IneModel = require('../model/OCR_INE');

class siac
{
    constructor(){
    }

    async insertarClienteSiac(user_id){
        return new Promise(async (success, error) => {
            try {
                let url_alta_cliente = process.env.SIAC_URL_ALTA_CLIENTE;
                let soapAction = "http://tempuri.org/AltaClientes";
                let altaClientes = await this.getXmlSiacCrendiaciales();
                let cuerpoXML = await this.getXmlSiacAltaClientes(user_id);
                altaClientes["tem:AltaClientes"]["tem:Clientes"] = cuerpoXML;
                const builder = new xml2js.Builder({ headless: false, renderOpts: { pretty: false }  });
                let xml = builder.buildObject(altaClientes);
                xml = xml.replace("<xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\">",'');
                xml = xml.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>','');
                let soapXml = this.soapXml(xml);
                              
                this.getData(url_alta_cliente, soapAction, soapXml, (result) => {
                    success(result);
                });
            } catch( exception ){
                console.log("----exception------");
                console.log(exception);
                console.log("----------");
                error(exception);
            }
        });
    }

    async sendMailAtlaClienteError(msg, user_id){
        var reportsPath = "public/siac_error/";
        const filename = `${user_id}_${Utils.makeid(10)}.xml`;
        let msgError = `Ocurrió un error al dar de alta el Cliente, Adjuntamos el XML para que pueda ser correjido manualmente`;
        let soapXml = {ClientesIn: await this.getXmlSiacAltaClientes(user_id)}
        const builder = new xml2js.Builder({ headless: false, renderOpts: { pretty: false }  });
        let xml = builder.buildObject(soapXml);
        xml = xml.replace("<xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\">",'');
        xml = xml.replace('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>','');
        soapXml = xml.replace(/tem:/g,'');

        fs.promises.mkdir(reportsPath, { recursive: true }).catch(console.error);
        fs.writeFile((reportsPath + filename), soapXml, (err) => {
            if (err) throw err; 
            let attachments = [
                {
                    filename: filename,
                    content:  fs.createReadStream(  process.cwd()+"/"+(reportsPath + filename) ),
                    contentType: 'text/xml'
                }
            ];            
            console.log("Fallo SIAC y envio Correo");                    
            Utils.senMail("joel.orozco@atr.com.mx","Alta Cliente SIAC", msgError, attachments);
        });
    }

    async getXmlSiacCrendiaciales(){
        return {
                'tem:AltaClientes': {
                    'tem:RazonSocial': process.env.SIAC_RAZON_SOCIAL,
                    'tem:ClaveAutentificacion': process.env.SIAC_CLAVE_AUTENTIFICACION,
                    'tem:Clientes': { }
                }
            };
    }

    async getXmlSiacAltaClientes(user_id) {
        return {
            'tem:Cliente':  {
                'tem:ClienteIn': {
                    'tem:DatosGenerales': await this.getDatosGenerales(user_id),
                    'tem:DatosEconomicos': await this.getDatosEconomicos(user_id),
                    //'tem:DatosAdicionales': this.getDatosAdicionales(user_id),
                    //'tem:DatosComplementarios': this.getDatosComplementarios(user_id), 
                    //'tem:InformacionBancaria': this.getInformacionBancaria(user_id),
                    //'tem:PersonasMorales': this.getDersonasMorales(user_id),
                    'tem:DatosLaborales':  await this.getDatosLaborales(user_id)
                }
            }
        };
    }

    async getDatosGenerales(user_id){
        return new Promise(async (success, error) => {
            let userModel = new UsersModel();        
            let addressModel = new UserAddressModel();
            let detailModel = new UserDetailsModel();
            let ineModel = new IneModel();

            let userWhere = { id: user_id };
            let where = { user_id: user_id };
            
            var user = await userModel.read(userWhere);
            var address = await addressModel.read(where);
            var detail = await detailModel.read(where);
            var ine = await ineModel.read(where);
            if (user && user.data && user.data.length) {
                success({
                    'tem:ClaveAdicional': '',
                    'tem:Personalidad': 'PERSONA FISICA',
                    'tem:NombreCliente': ((detail.data[0].first_name +" "+ detail.data[0].last_name)).trim(),
                    'tem:ApellidoPaterno': detail.data[0].father_name,
                    'tem:ApellidoMaterno': detail.data[0].mother_name,
                    'tem:Direccion': address.data[0].street,
                    'tem:NoExterior': address.data[0].address_no,
                    'tem:NoInterior': address.data[0].address_inside_no || '',
                    'tem:CodigoPostal': address.data[0].postcode,
                    'tem:Estado':  address.data[0].state,
                    'tem:Municipio':  address.data[0].town,
                    'tem:Poblacion':  address.data[0].town,
                    'tem:Colonia':  address.data[0].suburb,
                    'tem:PaisNacionalidad': 'MEXICO',
                    'tem:EstadoNacimiento': detail.data[0].state_dob,
                    'tem:FechaNacimiento': detail.data[0].DOB.getFullYear()+"-"+Utils.padTo2Digits(detail.data[0].DOB.getMonth()+1)+"-"+ Utils.padTo2Digits(detail.data[0].DOB.getDate()+1),
                    'tem:Sexo': detail.data[0].gender,
                    'tem:RFC': detail.data[0].RFC,
                    'tem:CURP': detail.data[0].CURP,
                    'tem:EstadoCivil': detail.data[0].marital_status,
                    'tem:TpoIdentificacion': "CREDENCIAL PARA VOTAR",
                    'tem:FolioIdentificacion': ine.data[0].claveElector,
                    'tem:TelefonoCelular': user.data[0].phone,
                    'tem:Email1': user.data[0].email
                });
            } else { error("Usuario no localizado") }

        });
    }

    getDatosLaborales(user_id){
        return new Promise(async (success, error) => {
            let creditModel = new QuoteCreditModel();
            let detailModel = new UserDetailsModel();
            let where = { user_id: user_id }
            var credit = await creditModel.read(where);
            var detail = await detailModel.read(where);
            if (credit && credit.data && credit.data.length) {
                success({
                    'tem:Pais': "MEXICO",
                    'tem:Antiguedad':( detail.data[0].antique),
                    'tem:SueldoMensual':  credit.data[0].monthlyIncome,
                });    
            } else { success({}) }
        });   
    }

    getDatosEconomicos(user_id){
        return new Promise(async (success, error) => {
            let creditModel = new QuoteCreditModel();
            let addressModel = new UserAddressModel();

            let where = { user_id: user_id }
            var credit = await creditModel.read(where);
            var address = await addressModel.read(where);

            if (credit && credit.data && credit.data.length) {
                success({
                    'tem:ArraigoLocalidadAnios':(address.data[0].living_since),
                    'tem:ArraigoLocalidadMeses':(address.data[0].living_since),
                    'tem:ArraigoDomicilioAnios':(address.data[0].living_since),
                    'tem:ArraigoDomicilioMeses':(address.data[0].living_since),
                    'tem:Vivienda': address.data[0].current_living,
                    'tem:DependientesEconomicos': credit.data[0].dependent || 0,
                    'tem:BaseIngreso':'MENSUAL',
                    'tem:Ingresos': credit.data[0].monthlyIncome || ''
                });    
            } else {success({})}
        });  
    }

    // getDatosAdicionales(user_id){

    // }
    // getDatosComplementarios(user_id){

    // }
    // getInformacionBancaria(user_id){

    // }
    // getDersonasMorales(user_id){

    // }


    soapXml(xml){
        
        let soapXml =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">\n'+
                            '<soapenv:Body>\n'+
                                xml+'\n'+
                            '</soapenv:Body>\n'+
                        '</soapenv:Envelope>';
        
        return soapXml;
    }

    
    getData(url, action, xml, fn) {
        request.post({
            url: url,
            headers: {
                'content-type': 'text/xml;charset=UTF-8',
                'Accept': 'text/xml',
                'Connection': 'keep-alive',
                'Accept-Encoding': '',
                'Accept-Language': 'en-US,en;q=0.8',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'SOAPAction': action
            },
            body: xml,
            timeout: 1000 * 60 * 10
        }, (err, result, body) => {
            if (err) {
                console.log("post siac");
                console.log(err);
                console.log(result);
                console.log(body);
                fn({ status: 0 });
            } else {
                var xmlParsed = convert.xml2js(body, { compact: true, spaces: 4 })
                fn({ status: 1, response: xmlParsed, xml: body });
            }
        });
    }
    
}

module.exports =  new siac();
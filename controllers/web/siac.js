"use strict";
var siac = require('../../services/siac');

class siacController {

    constructor() {}

    async insertarClienteSiac(req, res, next){
        console.log("-----------insertarClienteSiac-------------");
        siac.insertarClienteSiac(req.body.session.data.id).then(async(result) => {                     
            console.log("--- resultado de siac---");
            if(result.response["soap:Envelope"]["soap:Body"]["soap:Fault"]){
                console.log("----soap:Fault------", result.response["soap:Envelope"]["soap:Body"]["soap:Fault"]);                        
                siac.sendMailAtlaClienteError("XML formato invalido",req.body.session.data.id);
                next(result.response);
            }

            if(result.status == 1 ) {
                let altaClientesResult = result.response["soap:Envelope"]["soap:Body"]['AltaClientesResponse']["AltaClientesResult"];                       
                if(altaClientesResult.ListadoEstatusInsercionCliente.EstatusInsercionCliente.Detalle._text != "REGISTRADO" ){
                    console.log("----soap:error:REGISTRADO------"); 
                    console.log(altaClientesResult.ListadoEstatusInsercionCliente.EstatusInsercionCliente.Detalle._text);
                    siac.sendMailAtlaClienteError(altaClientesResult.ListadoEstatusInsercionCliente.EstatusInsercionCliente.Detalle._text,req.body.session.data.id);
                    next(altaClientesResult); 
                }else{
                    console.log("----result.status------"); 
                    res.json(altaClientesResult);
                }
            } else {
                console.log("----soap:error------"); 
                siac.sendMailAtlaClienteError("Error no reconocido",req.body.session.data.id);
                next(result.response);
            }

        }, (err) => {
            console.log("err fin...", err);            
            next(err);
        });
    }
}

module.exports = siacController;
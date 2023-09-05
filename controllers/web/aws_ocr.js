
const Ocr_ine = require('../../model/OCR_INE');
const Utils = require('../../libs/Utils');
const UserDetailsModel = require('../../model/userDetails');

class Orc {

    /**
	 * 
	 * @param {json} data incoming file aws
	 * @param {id} id user id
     * @returns {Promise<object>} Promise true or false
	 */
    validateIneToData = async (data, id) => {
        return new Promise((success, error) => {  
            var details = new UserDetailsModel,
            where = { user_id: id }; 
            //console.log(data);
            if( data.map.VIGENCIA <  new Date().getFullYear()){
                error("Identificación no vigente");
            }
            details.read(where).then((result) => {   
                //TODO: en algunos casos la ine no da por que pone la O como 0
                // if((data.CURP) != result.data[0].CURP){
                //     error("El documento enviado, es invalido. La CURP no coincide con los datos capturados.");
                // }            
                if((data.dob)+"" != Utils.formatDate(result.data[0].DOB)){
                    error("El documento enviado, es invalido. La fecha de nacimiento no coincide con los datos capturados.");
                }
                if( data.name.nombre.toUpperCase().trim() == result.data[0].first_name.toUpperCase().trim() && 
                    data.name.segundo_nombre.toUpperCase().trim() == result.data[0].last_name.toUpperCase().trim() && 
                    data.name.apellido_materno.toUpperCase().trim() == result.data[0].mother_name.toUpperCase().trim() && 
                    data.name.apellido_paterno.toUpperCase().trim() == result.data[0].father_name.toUpperCase().trim() 
                ){                    
                    success(true);
                } else {
                    error("El documento enviado, es invalido. El nombre no coincide con los datos capturados.");
                }

            }, (err) => {
                error(err);
            });
        });
    }

    /**
	 * 
	 * @param {json} data incoming file aws
	 * @param {user_id} id user id
     * @returns {Promise<object>} Promise ocr_ine result
	 */
    saveOcrIne = async (formDocument, user_id) => {
        return new Promise((success, error) => {
            
            let ocr_ine = new Ocr_ine;
            let where = {
                user_id: user_id
            };

            ocr_ine.read(where).then((result) => {
                const [day, month, year] = formDocument.dob.split('/');
                let array = {
                    user_id: user_id,
                    apellido_paterno: formDocument.name.apellido_paterno,
                    apellido_materno: formDocument.name.apellido_materno,
                    nombre: formDocument.name.nombre,
                    segundo_nombre: formDocument.name.segundo_nombre,
                    dob:  new Date(+year, month-1, +day),
                    CURP: formDocument.CURP,
                    gender: formDocument.gender,
                    claveElector: formDocument.claveElector,
                    vigencia: formDocument.map.VIGENCIA
                };

                if (result.data.length > 0) {
                    array.id =  result.data[0].id;
                }

                ocr_ine.create(array)
                .then((result) => {
                    success(result);
                }, (err) => {
                    error(err);
                });
            });
        });
    }

}

module.exports = new Orc();
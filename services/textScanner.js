const AwsTextract = require('../libs/AwsTextract')
const { request, response } = require('express');
const resizer = require('node-image-resizer');
const Temp = require('./../server/Temp');
class TextScanner {

	constructor() { }

	/**
	 * 
	 * @param {request} req 
	 * @param {response} res 
	 */
	analyzeDocument = async (req, res) => {
		try {
			const docBuffer = Buffer.from(req.body.document.replace(/^data:image\/[a-z]+;base64,/, ''), 'base64');
			const formDocument = await AwsTextract.analyzeDocument(docBuffer);
			res.status(200).json({ code: 200, result: formDocument });
		} catch (error) {
			res.status(500).json({ code: 500, error: error.message, stack: error.stack, msg: "No se pudo realizar la consulta" });
		}
	}

	/**
	 * Esto es solo para pruebas
	 * @param {request} req 
	 * @param {response} res 
	 */
	compressImage = async (req, res) => {
		try {
			const setup = {
				all: {
					path: './temp/',
					quality: 90
				},
				versions: [{
					prefix: 'big_',
					width: 1024,
					height: 768
				}]
			};
			const temPath = Temp.write(req.files.photo.data, './temp/', req.files.photo.name);
			const img = await resizer(temPath, setup, req.files.photo.name);
			const buffer = Temp.readTempBuffer(img[0]);
			Temp.removeTempFile(temPath);
			res.status(200).json({ code: 200, result: img, buffer });
		} catch (error) {
			res.status(500).json({ code: 500, error: error.message, stack: error.stack, msg: "No se pudo realizar la consulta" });
		}
	}
}

module.exports = new TextScanner();
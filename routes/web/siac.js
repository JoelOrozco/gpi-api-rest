var express = require('express');
var router = express.Router();

var ValidateParamsService = require('../../services/validateParams');
var MiddlewareService = require('../../services/middleware');
var siacController = require('../../controllers/web/siac');

var validateParams = new ValidateParamsService();
var middlewareService = new MiddlewareService();
var siacController = new siacController();


//router.use('/', validateParams.validate);
router.use('/', middlewareService.validateSession);
router.post('/siac-alta-cliente', siacController.insertarClienteSiac);

module.exports = router;
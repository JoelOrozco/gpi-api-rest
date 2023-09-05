var express = require('express');
var router = express.Router();

var ValidateParamsService = require('../../services/validateParams');
var MiddlewareService = require('../../services/middleware');
var UtilityController = require('../../controllers/web/utility');

var validateParams = new ValidateParamsService();
var middlewareService = new MiddlewareService();
var utilityController = new UtilityController();

router.use('/', validateParams.validate);
router.post('/prueba', utilityController.num_operacion);
router.use('/', middlewareService.validateSession);

router.post('/send_email', utilityController.sendEmail);

module.exports = router;
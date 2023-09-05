var express = require('express');
var router = express.Router();

var WebSessionController = require('../../controllers/web/session');
var ValidateParamsService = require('../../services/validateParams');
var MiddlewareService = require('../../services/middleware');

// var webSessionController = new WebSessionController();
// var validateParams = new ValidateParamsService();
// var middlewareService = new MiddlewareService();

// router.use('/', validateParams.validate);

// router.post('/login', webSessionController.login, webSessionController.loginAcesor);
// router.post('/login-phone', webSessionController.loginFromCellPhone);
// router.post('/register', webSessionController.register);
// router.post('/recover-password', webSessionController.recoverPassword);
// router.post('/validate-recovery-code', webSessionController.verifyRecoveryCode);
// router.post('/update-password', webSessionController.updatePassword);

// router.use('/', middlewareService.validateSession);
// router.get('/logout', webSessionController.logout);

module.exports = router;
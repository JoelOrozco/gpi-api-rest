let express = require('express');
let router = express.Router();

let Test_endpoint = require('../../controllers/web/test');
let test_endpoint = new Test_endpoint();

//router.get('/consult', bureauController.consultCreditBureau, bureauController.consultCreditBureaupdf);
router.get('/test', test_endpoint.get_test);

module.exports = router;
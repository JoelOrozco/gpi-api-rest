let express = require('express');
let router = express.Router();
const crediaController = require('../controllers/crediaController');
   
router.post('/cliente', crediaController.postCliente);
router.post('/credito', crediaController.postCredito);


module.exports = router;

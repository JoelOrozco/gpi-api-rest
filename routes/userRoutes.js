let express = require('express');
let router = express.Router();

const userController = require('../controllers/userController');
   
router.get('/list', userController.list);
router.get('/find/clickup_task/:clickup_task', userController.find);

module.exports = router;

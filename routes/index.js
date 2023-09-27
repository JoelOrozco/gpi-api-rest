var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();
var cors = require('cors');


dotenv.config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const $RefParser = require('json-schema-ref-parser');

//var sessionService = require('../services/session');

$RefParser.dereference(swaggerDocument, (err, schema) => {
    if (err) {
        console.error(err);
    } else {
        var options = {
            // customJs: '/javascripts/custom.js',
            // customCssUrl: '/stylesheets/style.css'
        };

        router.get('/api-docs', swaggerUi.setup(schema, options));
    }
})

router.use(express.json());
router.use(cors());
router.options('*', cors());
//router.use(sessionService.getSessionMidleWare());

// router.use('/api-docs', (req, res, next) => {
//     var cookie = req.cookies;
//     if (cookie.auth_compro == '' || cookie.auth_compro == null || cookie.auth_compro == undefined) {
//         res.render('login_api_docs');
//     } else {
//         next();
//     }
// })

//router.use('/api-docs', swaggerUi.serve);
//router.use('/api/api_docs', require('./api-docs'));

//router.use('/api/web/session', require('./web/session'));
router.use('/api/web/test', require('./web/test'));
router.use('/api/user', require('./userRoutes'));
router.use('/api/credia', require('./crediaRoutes'));

module.exports = router;
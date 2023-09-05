var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
    res.cookie('auth_compro', req.body)
    var cookie = req.cookies;
    res.json({ status: 1 })
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth_compro');
    var cookie = req.cookies;
    res.json({ status: 1 })
});


module.exports = router;
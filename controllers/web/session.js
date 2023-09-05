"use strict";

var UsersModel = require('../../model/users');
var responses = require('../../services/responses');
var sessionService = require('../../services/session');
var sha2_256 = require('simple-js-sha2-256');
var nodemailer = require('nodemailer');

const dotenv = require('dotenv');
dotenv.config();

var transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    requireTLS: true,
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    }
});

class WebSessionController {

    constructor() {}

    login(req, res, next) {
        var body = req.body,
            users = new UsersModel,
            where = {
                email: body.email,
                password: sha2_256(body.password),
                status: 'active'
            };

        users.read(where, {}, 1).then(async(result) => {
                if (result && result.data && result.data.length && result.data[0].id) {
                    var sessionData = {
                            id: result.data[0].id,
                        },
                        token = await sessionService.setSession(req, sessionData),
                        newResponse = {
                            status: result.status,
                            msg: result.msg,
                            data: {
                                id: result.data[0].id,
                                session: token,
                                tipo: "CLIENTE"
                            }
                        };
                    if (result.data.length > 0) {
                        res.json(newResponse);
                    } else {
                        res.json(responses.error.error1);
                    }
                } else {
                    //res.json(responses.error.error1);
                    next();
                }
            },
            (err) => {
                res.json(err);
            });
    }

    loginAcesor(req, res) {
        var body = req.body,
            users = new UsersModel,
            where = {
                email: body.email,
                clave_asesor: (body.password),
                status: 'active'
            };

        users.read(where, {}, 1).then(async(result) => {
                if (result && result.data && result.data.length && result.data[0].id) {
                    var sessionData = {
                            id: result.data[0].id,
                        },
                        token = await sessionService.setSession(req, sessionData),
                        newResponse = {
                            status: result.status,
                            msg: result.msg,
                            data: {
                                id: result.data[0].id,
                                session: token,
                                tipo: "ACESOR"
                            }
                        };
                    if (result.data.length > 0) {
                        res.json(newResponse);
                    } else {
                        res.json(responses.error.error1);
                    }
                } else {
                    res.json(responses.error.error1);
                    //next();
                }
            },
            (err) => {
                res.json(err);
            });
    }

    register(req, res) {
        var body = req.body,
            users = new UsersModel,
            insertData = body;

        insertData.password = sha2_256(body.password);
        delete insertData.session;
        if(body.tipo) {
            users.create(insertData).then((result) => {
                res.json(result);
            }, (err) => {
                res.json(err);
            });
        }else {
            users.read({ email: body.email}, {}, 1).then((result) => {
                if (result.data.length == 0) {
                    users.read({ phone: body.phone}, {}, 1).then((result) => {
                        if (result.data.length == 0) {
                            users.create(insertData).then((result) => {
                                var sessionData = {
                                        id: result.data.insertId
                                    },
                                    token = sessionService.setSession(req, sessionData),
                                    newResponse = {
                                        status: result.status,
                                        msg: result.msg,
                                        data: {
                                            id: result.data.insertId,
                                            session: token
                                        }
                                    };

                                res.json(newResponse);
                            }, (err) => {
                                res.json(err);
                            });
                        } else
                            res.json(responses.error.error3);
                    }, (err) => {
                        res.json(err);
                    });
                } else
                    res.json(responses.error.error2);
            }, (err) => {
                res.json(err);
            });
        }
    }

    recoverPassword(req, res) {
        var body = req.body,
            users = new UsersModel,
            where = {
                email: body.email,
                status: 'active'
            },
            verificationCode = Math.floor(100000 + Math.random() * 900000),
            paramsUpd = {
                recover_code: verificationCode,
                recover_password: 1,
            };

        users.read(where).then((result) => {
            if (result.data.length > 0) {
                transport.sendMail({
                    from: process.env.MAIL_FROM_EMAIL,
                    to: result.data[0].email,
                    subject: 'Crédimovil - Código de verrificación',
                    html: `Tu código de verrificación crédimovil es: ${verificationCode}`
                }, function(result, err) {});

                users.update(paramsUpd, where).then((result) => {
                    res.json(result);
                }, (err) => {
                    res.json(err);
                });
            } else
                res.json(responses.error.error5);
        }, (err) => {
            res.json(err);
        });
    }

    verifyRecoveryCode(req, res) {
        var body = req.body,
            users = new UsersModel,
            where = {
                email: body.email,
                status: 'active',
                recover_code: body.recoveryCode,
                recover_password: 1,
            };

        users.read(where).then((result) => {
            if (result.data.length > 0) {
                res.json(result);
            } else
                res.json(responses.error.error6);
        }, (err) => {
            res.json(err);
        });
    }

    updatePassword(req, res) {
        var body = req.body,
            users = new UsersModel,
            where = {
                email: body.email,
                status: 'active',
                recover_code: body.recoveryCode,
                recover_password: 1,
            },
            paramsUpd = {
                password: sha2_256(body.password),
                recover_code: null,
                recover_password: 0,
            }

        users.read(where).then((result) => {
            if (result.data.length > 0) {
                users.update(paramsUpd, where).then((result) => {
                    res.json(result);
                }, (err) => {
                    res.json(err);
                });
            } else
                res.json(responses.error.error6);
        }, (err) => {
            res.json(err);
        });
    }

    logout(req, res) {
        sessionService.destroySession(req, (result) => {
            res.json(result);
        });
    }
    
    loginFromCellPhone(req, res) {
        var body = req.body,
            users = new UsersModel,
            where = {
                phone: body.phone
            };
        console.log(body.phone);
        users.read(where).then((result) => {
            if (result.data.length > 0) {
                res.json(result.data[0]);
            } else
                res.json(responses.error.error5);
        }, (err) => {
            res.json(err);
        });
    }
}

module.exports = WebSessionController;
"use strict";

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var dotenv = require('dotenv');

var ValidateTypeService = require('./validateType');
var error = require('./error');

dotenv.config();

class SessionService {
    constructor(router) {
        this.validateType = new ValidateTypeService();
        var storeOptionMySQL = {
            host: process.env.HOST,
            port: 3306,
            user: process.env.USER_MYSQL,
            password: process.env.PASS,
            database: process.env.DATABASE,
            clearExpired: true,
            // checkExpirationInterval: 2700000,
            // expiration: 1800000,
            createDatabaseTable: true,
            schema: {
                tableName: 'sessions',
                columnNames: {
                    session_id: 'session_id',
                    expires: 'expires',
                    data: 'data'
                }
            }
        };

        this.sessionSecret = '2a00f575d8ef94922e7673896e0b8e4e4485f2c162d33231d1c0be079dee2095';

        var sessionStore = new MySQLStore(storeOptionMySQL, function() {
            sessionStore.setExpirationInterval();
        });

        this.sessionStore = sessionStore;
    }

    getSessionMidleWare() {

        return session({

            store: this.sessionStore,
            resave: true,
            saveUninitialized: false,
            cookie: {
                maxAge: null
            },
            secret: this.sessionSecret
        });
    }

    setSession(req, data) {

        if (this.validateType.validate(data, 'object')) {
            req.session.data = data;
            return req.sessionID;
        } else {
            return null;
        }
    }

    getSession(req, sessionId, fn) {

        var sessionStore = this.sessionStore;
        sessionStore.get(sessionId, function(err, sess) {
            if (err) {
                fn(error.error9);
            } else if (sess == null || sess == undefined) {
                fn(error.error8);
            } else {
                sessionStore.touch(sessionId, sess, function(err) {
                    if (err) {
                        fn(error.error10);
                    } else {
                        req.body.session = sess;
                        req.body.session.session = sessionId;
                        fn({ status: 1, msg: 'Exito', data: sess });
                    }
                });
            }
        });
    }

    destroySession(req, fn) {
        var sessionId = req.body.session.session;

        var sessionStore = this.sessionStore;
        req.session.destroy(function(err) {
            if (err) {
                fn(error.error11);
            } else {
                sessionStore.destroy(sessionId, function(err) {
                    if (err) {
                        fn(error.error11);
                    } else {
                        fn({ status: 1, msg: 'Exito' });
                    }
                });
            }
        });
    }
}

var sessionService = new SessionService();

module.exports = sessionService;
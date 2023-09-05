"use strict";

var sessionService = require('../services/session');
var error = require('../services/error');

class MiddlewareService {
    constructor() {}

    validateSession(req, res, next) {
        var headers = req.headers;

        if (headers.session) {
            sessionService.getSession(req, headers.session, (response) => {
                if (response.status == 1) {
                    next();
                } else {
                    res.json(response);
                }
            });
        } else {
            res.json(error.error14);
        }
    }
}

module.exports = MiddlewareService;
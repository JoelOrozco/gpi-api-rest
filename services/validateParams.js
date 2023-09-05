"use strict";

var error = require('../services/error');
var validateJsonSchema = require('jsonschema').validate;
var params = require('../services/params.json');


class ValidateParamsService {
    constructor() {}

    validate(req, res, next) {
        // var schema = paramsSchema.getSchema(req.originalUrl);
        var schema = params[req.originalUrl];

        if (schema != null) {

            var validated = validateJsonSchema(req.body, schema);


            if (validated.errors.length > 0) {
                var result = {
                        status: error.error2.status,
                        msg: error.error2.msg,
                    },
                    errResponse = [];
                validated.errors.forEach((value) => {
                    errResponse.push(value.stack);
                });
                result.msg += ': ' + errResponse.join(', ');
                res.json(result)
            } else {
                next();
            }
        } else {
            res.json(error.error1);
        }
    }

}

module.exports = ValidateParamsService;
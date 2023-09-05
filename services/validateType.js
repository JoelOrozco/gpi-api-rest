"use strict";

class ValidateTypeService {
    constructor() {}

    validate(data, type) {
        switch (type) {
            case 'object':
                if (typeof(data) == 'object' && Object.keys(data).length > 0) {
                    return true;
                } else {
                    return false;
                }
            case 'number':
                if (typeof(data) == 'number') {
                    return true;
                } else {
                    return false;
                }
            case 'string':
                if (typeof(data) == 'string') {
                    return true;
                } else {
                    return false;
                }
            default:
        }
    }
}

module.exports = ValidateTypeService;
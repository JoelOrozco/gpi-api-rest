"use strict";

var crudModel = require('./CRUD');

class Ocr_ine {

    constructor() {
        this.table = 'OCR_INE';
    }

    read(where, order, limit) {
        return new Promise((success, error) => {
            crudModel.read(this.table, where, order, limit).then((result) => {
                if (result.status == 1)
                    success(result);
                else
                    error(result);
            });
        });
    }

    create(params) {
        return new Promise((success, error) => {
            crudModel.createUpdate(this.table, params).then((result) => {
                if (result.status == 1)
                    success(result);
                else
                    error(result);
            });
        });
    }

    update(params, where) {
        return new Promise((success, error) => {
            crudModel.update(this.table, params, where).then((result) => {
                if (result.status == 1)
                    success(result);
                else
                    error(result);
            });
        });
    }
}

module.exports = Ocr_ine;
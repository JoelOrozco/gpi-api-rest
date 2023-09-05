"use strict";

class Test_endpoint {
    constructor() {}

    async get_test(req, res) {
        res.json("test");
    }
}

module.exports = Test_endpoint;

"use strict";
var dotenv = require('dotenv');
var mysql = require('mysql');
var conectionService;

dotenv.config();

class ConnectionService {
    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.HOST,
            user: process.env.USER_MYSQL,
            password: process.env.PASS,
            database: process.env.DATABASE,
            timezone: 'UTC+0'
        });

        this.poolMirror = mysql.createPool({
            connectionLimit: 10,
            host: process.env.HOST,
            user: process.env.USER_MYSQL,
            password: process.env.PASS,
            database: process.env.DATABASE_MIRROR,
            timezone: 'UTC+0'
        });
    }

    getConnection() {
        return this.pool;
    }
    getConnectionMirror() {
        return this.poolMirror;
    }
}

var conectionService = new ConnectionService();

module.exports = conectionService;
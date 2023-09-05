"use strict";

var dotenv = require('dotenv');
var CryptoJS = require("crypto-js");
var HmacSHA512 = require("crypto-js/hmac-sha512");

dotenv.config();

const secret = process.env.ENCRYPT_SECRET;

class EncryptionService {
    constructor() {}

    encrypt(text, fn) {
        const encrypted = HmacSHA512(text, secret).toString();
        fn(encrypted);
    }

    // decrypt(encryptedText, fn) {
    //     const bytes = CryptoJS.SHA256.decrypt(encryptedText, secret),
    //         text = bytes.toString(CryptoJS.enc.Utf8);
    //     fn(text);
    // }
}

const encryptionService = new EncryptionService;

module.exports = encryptionService;
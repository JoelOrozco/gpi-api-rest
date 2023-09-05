"use strict";


class Responses {
    constructor() {
        this.error = new Error;
    }
}

class Error {
    constructor() {
        this.error1 = { status: 0, code: 1, msg: 'Credenciales incorrectas' };
        this.error2 = { status: 0, code: 2, msg: 'Ya exite una cuenta con este correo registrado, por favor ingrese uno diferente' };
        this.error3 = { status: 0, code: 3, msg: 'Ya exite una cuenta con este teléfono registrado, por favor ingrese uno diferente' };
        this.error4 = { status: 0, code: 4, msg: 'El código de verificación ingresado es incorrecto' };
        this.error5 = { status: 0, code: 5, msg: 'El usuario que haz ingresado no está registrado' };
        this.error6 = { status: 0, code: 6, msg: 'El código que haz ingresado es incorrecto' };
    }
}

var responses = new Responses;

module.exports = responses;
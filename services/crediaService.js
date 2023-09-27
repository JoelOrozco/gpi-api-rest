const axios = require('axios');
let token = "";

class CrediaService {
    constructor() {

    }

    async getToken() {
        this.client = axios.create({
            baseURL: process.env.BASE_URL,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        this.client.defaults.headers.common['Application-Id'] = process.env.Application_Id;
        let data = {
            grant_type: "password",
            Password: "GPI2022",
            Username: "GPI"
        };
        return new Promise((success, error) => {
            this.client.post('/token', data).then((result) => {
                //TODO: no se si quitarlo de aqui;
                token = result.data.access_token;
                success(result.data);
            }).catch(err => {
                error(err)
            });
        });
    }

    async postCliente(data) {
        return new Promise((success, error) => {
            this.client = axios.create({
                baseURL: process.env.BASE_URL,
                headers: { 'Content-Type': 'application/json'},
            });
            this.client.defaults.headers.common['Authorization'] = "Bearer "+ token;
            this.client.post('/clientes', data)
            .then((result) => {
                success(result.data);
            }).catch(err => {
                let result = this.getError(err);
                error(result);
            });
        });
    }

    async postCredito(data) {
        return new Promise((success, error) => {
            this.client = axios.create({
                baseURL: process.env.BASE_URL,
                headers: { 'Content-Type': 'application/json'},
            });
            this.client.defaults.headers.common['Authorization'] = "Bearer "+ token;
            this.client.post('/Creditos', data)
            .then((result) => {
                success(result.data);
            }).catch(err => {
                let result = this.getError(err);
                error(result);
            });
        });
    }

    getError(error) {
        let e = error;
        if (error.response) {
          e = error.response.data;                   // data, status, headers
          if (error.response.data && error.response.data.error) {
            e = error.response.data.error;           // my app specific keys override
          }
        } else if (error.message) {
          e = error.message;
        } else {
          e = "Unknown error occured";
        }
        return e;  
    } 
}

module.exports = new CrediaService();
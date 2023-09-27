const users = require('../models').users;
const crediaService = new require("../services/CrediaService");

const clienteModel = require("../model/clienteModel").ClienteModel;

//const clienteModel = require(rutaModelo);

module.exports = {

  list(_, res) {
    return users.findAll({})
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return users.findAll({
      where: {
        clickup_task: req.params.clickup_task,
      }
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },
  test(req, res) {

    return crediaService.getToken()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(error => {
        res.status(400).send(error);
      });
    //res.status(200).send(result)

  }
};
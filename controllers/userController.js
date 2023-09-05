const Sequelize   = require('sequelize');
const users       = require('../models').users;
module.exports = {

 list(_, res) {
     return users.findAll({})
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return users.findAll({
         where: {
            clickup_task: req.params.clickup_task,
         }
     })
     .then(users => res.status(200).send(users))
     .catch(error => res.status(400).send(error))
  },
};
var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _analista_tasck = require("./analista_tasck");
var _analistas = require("./analistas");
var _asesor = require("./asesor");
var _bc_reports = require("./bc_reports");
var _clickup_current_status = require("./clickup_current_status");
var _clickup_status_history = require("./clickup_status_history");
var _cliente = require("./cliente");
var _contacted = require("./contacted");
var _contract_condition = require("./contract_condition");
var _contract_reject = require("./contract_reject");
var _dias_festivos = require("./dias_festivos");
var _horario_roll = require("./horario_roll");
var _insurce = require("./insurce");
var _lote = require("./lote");
var _matriz_riesgo = require("./matriz_riesgo");
var _ocr_ine = require("./ocr_ine");
var _quote_credit = require("./quote_credit");
var _quote_insurance = require("./quote_insurance");
var _sepomex = require("./sepomex");
var _sessions = require("./sessions");
var _tipo_credito = require("./tipo_credito");
var _user_address = require("./user_address");
var _user_contract = require("./user_contract");
var _user_details = require("./user_details");
var _user_documents = require("./user_documents");
var _user_employment = require("./user_employment");
var _user_references = require("./user_references");
var _users = require("./users");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var analista_tasck = _analista_tasck(sequelize, DataTypes);
  var analistas = _analistas(sequelize, DataTypes);
  var asesor = _asesor(sequelize, DataTypes);
  var bc_reports = _bc_reports(sequelize, DataTypes);
  var clickup_current_status = _clickup_current_status(sequelize, DataTypes);
  var clickup_status_history = _clickup_status_history(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var contacted = _contacted(sequelize, DataTypes);
  var contract_condition = _contract_condition(sequelize, DataTypes);
  var contract_reject = _contract_reject(sequelize, DataTypes);
  var dias_festivos = _dias_festivos(sequelize, DataTypes);
  var horario_roll = _horario_roll(sequelize, DataTypes);
  var insurce = _insurce(sequelize, DataTypes);
  var lote = _lote(sequelize, DataTypes);
  var matriz_riesgo = _matriz_riesgo(sequelize, DataTypes);
  var ocr_ine = _ocr_ine(sequelize, DataTypes);
  var quote_credit = _quote_credit(sequelize, DataTypes);
  var quote_insurance = _quote_insurance(sequelize, DataTypes);
  var sepomex = _sepomex(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var tipo_credito = _tipo_credito(sequelize, DataTypes);
  var user_address = _user_address(sequelize, DataTypes);
  var user_contract = _user_contract(sequelize, DataTypes);
  var user_details = _user_details(sequelize, DataTypes);
  var user_documents = _user_documents(sequelize, DataTypes);
  var user_employment = _user_employment(sequelize, DataTypes);
  var user_references = _user_references(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  clickup_current_status.belongsTo(users, { as: "clickup_task_user", foreignKey: "clickup_task"});
  users.hasMany(clickup_current_status, { as: "clickup_current_statuses", foreignKey: "clickup_task"});
  clickup_status_history.belongsTo(users, { as: "clickup_task_user", foreignKey: "clickup_task"});
  users.hasMany(clickup_status_history, { as: "clickup_status_histories", foreignKey: "clickup_task"});
  ocr_ine.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ocr_ine, { as: "ocr_ines", foreignKey: "user_id"});

  return {
    admin,
    analista_tasck,
    analistas,
    asesor,
    bc_reports,
    clickup_current_status,
    clickup_status_history,
    cliente,
    contacted,
    contract_condition,
    contract_reject,
    dias_festivos,
    horario_roll,
    insurce,
    lote,
    matriz_riesgo,
    ocr_ine,
    quote_credit,
    quote_insurance,
    sepomex,
    sessions,
    tipo_credito,
    user_address,
    user_contract,
    user_details,
    user_documents,
    user_employment,
    user_references,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sepomex', {
    d_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    d_asenta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    d_tipo_asenta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    D_mnpio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    d_estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    d_ciudad: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    d_CP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    c_estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    c_oficina: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    c_tipo_asenta: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    c_mnpio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_asenta_cpcons: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    d_zona: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sepomex',
    timestamps: false
  });
};

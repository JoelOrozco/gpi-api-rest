const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_contract', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_primer_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_ultimo_pago: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dia_pago: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    referencia_banco: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero_operacion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "Operation_Number_UNIQUE"
    },
    frecuencia: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "MENSUAL"
    },
    valor_comercial_vehiculo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    tasa: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    nombre_pago_terceros: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    lote: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    nombre_asesor: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    autorizado_por: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_contract',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Operation_Number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero_operacion" },
        ]
      },
    ]
  });
};

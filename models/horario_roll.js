const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horario_roll', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    roll: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hora_entrada: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hora_salida: {
      type: DataTypes.TIME,
      allowNull: true
    },
    dias: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'horario_roll',
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
    ]
  });
};

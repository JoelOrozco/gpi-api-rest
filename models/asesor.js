const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asesor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clave_asesor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Nombre_asesor: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    Correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Activo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'asesor',
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

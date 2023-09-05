const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ApellidoPaterno: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    ApellidoMaterno: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    Nombres: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING(245),
      allowNull: false
    },
    RFC: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "RFC_UNIQUE"
    },
    CURP: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "CURP_UNIQUE"
    },
    Telefono: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Corre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    FechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EstadoNacimiento: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Genero: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "CURP_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CURP" },
        ]
      },
      {
        name: "RFC_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RFC" },
        ]
      },
    ]
  });
};

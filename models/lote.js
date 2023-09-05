const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lote', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    clave_asesor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    calle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    colonia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    propietario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    'contacto 1': {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    'contacto 2': {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    puesto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'lote',
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

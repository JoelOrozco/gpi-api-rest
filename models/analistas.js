const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analistas', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Correo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Tareas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Activo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'analistas',
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

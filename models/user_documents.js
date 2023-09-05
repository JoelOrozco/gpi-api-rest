const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    clickup_task: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ine: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ingreso: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_documents',
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

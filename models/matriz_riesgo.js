const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matriz_riesgo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    min_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_ratio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    max_ratio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matriz_riesgo',
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

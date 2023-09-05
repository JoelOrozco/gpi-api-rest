const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clickup_current_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clickup_task: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'users',
        key: 'clickup_task'
      }
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    by_minute: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    since: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clickup_current_status',
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
        name: "clickup_current_status_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "clickup_task" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clickup_status_history', {
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
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orderindex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    by_minute: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    since: {
      type: DataTypes.DATE,
      allowNull: true
    },
    until: {
      type: DataTypes.DATE,
      allowNull: true
    },
    by_minute_laboral: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    since_laboral: {
      type: DataTypes.DATE,
      allowNull: true
    },
    until_laboral: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clickup_status_history',
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
        name: "clickup_status_history_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "clickup_task" },
        ]
      },
    ]
  });
};

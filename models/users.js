const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email_verified_at: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone_code: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "+52"
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    a_step: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    request_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    confirmation_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    clickup_task: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    confirmed: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_by_role: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    login_from: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "custom"
    },
    otp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    recover_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    recover_password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "active"
    },
    user_type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "user"
    },
    clave_asesor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "Cliente"
    },
    usuario_padre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buro_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "clickup_task",
        using: "BTREE",
        fields: [
          { name: "clickup_task" },
        ]
      },
    ]
  });
};

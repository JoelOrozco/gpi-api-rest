const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quote_insurance', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    age: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    gender: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    postcode: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    payment_method: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    vehicle_model: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    vehicle_brand: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    vehicle_version: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    vehicle_description: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'quote_insurance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "full_name" },
          { name: "age" },
          { name: "email" },
          { name: "phone" },
          { name: "gender" },
          { name: "postcode" },
          { name: "payment_method" },
          { name: "vehicle_model" },
          { name: "vehicle_brand" },
          { name: "vehicle_version" },
          { name: "vehicle_description" },
        ]
      },
    ]
  });
};

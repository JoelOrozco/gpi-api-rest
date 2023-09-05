const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    address_no: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    address_inside_no: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    suburb: {
      type: DataTypes.STRING(455),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    current_living: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    living_since: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    main_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    neighborhood: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    streets: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    monthly_rent: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_address',
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

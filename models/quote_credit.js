const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quote_credit', {
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
    vehicle_price: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_hitch: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    months: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    monthlyIncome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dependent: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_model: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_brand: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_version: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    desired_payment: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    insurance_payment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vehicle_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    purpose_of_vehicle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    monthly_payment: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    requested_amount_credit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    type_quote: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lote: {
      type: DataTypes.STRING(245),
      allowNull: true
    },
    visitador: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    residual_percentage: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quote_credit',
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

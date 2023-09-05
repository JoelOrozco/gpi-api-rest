const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurce', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insurce_name: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    insurce_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    insurance_coverage: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    serial_number_vehicle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    engine_number_vehicle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    car_license_plates: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    invoice_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invoice_issuer: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'insurce',
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

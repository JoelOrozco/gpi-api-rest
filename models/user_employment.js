const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_employment', {
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
    company_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    employment_situation: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "unemployed, eventual"
    },
    line_of_business: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    default_ocupation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    antique: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "two_to_four_years, more_than_four_years, less_than_one_year"
    },
    net_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    education: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    extra_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    vacation_per_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ocupation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fixed_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    verifiable_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    unverifiable_income: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    family_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    workplace: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    company_address: {
      type: DataTypes.STRING(145),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_employment',
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: "id",
      },
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "Male,Female"
    },
    marital_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "married, separated, widowed, free"
    },
    bc_score: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nacionality: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RFC: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    bc_approved: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    state_dob: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(245),
      allowNull: true
    },
    food_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    health_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    transportation_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    clothing_footwear_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    insurance_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    recreation_expenses: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    monthly_education_expenditure: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    economic_dependents: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    mops: {
      type: DataTypes.STRING(145),
      allowNull: true
    },
    fecha_defuncion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    creditoMaximo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    escritura_escritura_publica: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    escritura_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    escritura_licenciado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    numero_notaria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estado_notaria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    municipio_notaria: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    folio_mercantil: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    notaria: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_details',
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
        name: "user_id_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};

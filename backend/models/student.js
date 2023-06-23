const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:816900@localhost:3306/edtech');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ra: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Student;
const Sequelize = require("sequelize");
const db = require("../db");

const Survey_answer = db.define("Survey_answer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  birth: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  answer: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Survey_answer;

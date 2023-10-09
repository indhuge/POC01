const Sequelize = require("sequelize");
const db = require("../db");

const Appointment = db.define("Appointment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  Company: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Confirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
module.exports = Appointment;

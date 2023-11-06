const Sequelize = require("sequelize");
const db = require("../db");

const Log = db.define("Log", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  log: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Log;

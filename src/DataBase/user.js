const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define("Usuario", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Nome: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
module.exports = User;

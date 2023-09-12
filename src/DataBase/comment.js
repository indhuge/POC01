const Sequelize = require("sequelize");
const db = require("./db");

const Comment = db.define("Comentario", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  post_id: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  cmt: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgresql://postgres:&V3sE6&dHjEwP&2@db.wzbbjilpwbeyyjqtvjau.supabase.co:5432/postgres",
  {
    dialectModule: require("pg"),
  }
);

module.exports = sequelize;

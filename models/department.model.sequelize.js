const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "officeappdb",
  host: "localhost:5432",
  username: "postgres",
  password: "devlin1234!",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const Department = sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  head: Sequelize.STRING,
  code: Sequelize.STRING
});

Department.sync();

// module.exports = Department;

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

const User = sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

User.sync();

// module.exports = User;

require("dotenv").config();
const winston = require("winston");
const server = require("./app");

const NODE_ENV = process.env.NODE_ENV;
let port;

switch (NODE_ENV) {
  case "development":
    winston.info("Development mode");
    port = 5000;
    break;
  case "staging":
    winston.info("Staging mode");
    port = 3000;
    break;
  case "production":
    winston.info("Production mode");
    port = 80;
    break;
  default:
    winston.info("NODE_ENV is not set properly");
    throw Error("Server stops");
}

// start server
server.listen(port, () =>
  winston.info(`Backend server started on port:${port}`)
);

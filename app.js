const Koa = require("koa");
const app = new Koa();

require("./startup/config"); // configuration
require("./startup/body-parser")(app); // parse incoming request bodies
require("./startup/cors")(app); // allow cross-origin requests
require("./startup/morgan.logger")(app); // http requests console logger
require("./startup/helmet")(app); // provides important security headers to make your app more secure by default.
require("./startup/database"); // set up Mongoose ORM and MongoDB connection
require("./routes")(app); // routers
require("./startup/respond")(app); //  adds useful methods to the Koa context.

module.exports = app;

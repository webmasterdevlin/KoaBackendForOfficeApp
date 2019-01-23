const logger = require("koa-logger");

module.exports = app => {
  if (env.NODE_ENV === "development") {
    app.use(logger("dev"));
  }
};

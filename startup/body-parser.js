const bodyParser = require("koa-bodyparser");

module.exports = app => {
  app.use(
    bodyParser({
      enableTypes: ["json"],
      jsonLimit: "5mb",
      strict: true,
      onerror: (err, ctx) => {
        ctx.throw("body parse error", 422);
      }
    })
  );
};

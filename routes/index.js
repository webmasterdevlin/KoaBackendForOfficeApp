const departmentRouter = require("./department.router");
const userRouter = require("./user.router");
const authRouter = require("../auth/auth.router");

module.exports = app => {
  app.use(authRouter.routes());
  app.use(departmentRouter.routes());
  app.use(userRouter.routes());

  app.use(userRouter.allowedMethods());
  app.use(departmentRouter.allowedMethods());
  app.use(userRouter.allowedMethods());
};

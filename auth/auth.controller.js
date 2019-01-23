const authService = require("../auth/auth.service");

async function authUser(ctx) {
  try {
    const user = await authService.verifyUser(ctx.request.body);
    if (user) {
      const createdJwt = await authService.sign(ctx.request.body);

      ctx.set("x-auth-token", createdJwt.token);
      ctx.status = 200;
      ctx.body = createdJwt;
    }
  } catch (error) {
    ctx.status = 500;
    ctx.throw(error);
  }
}

module.exports = {
  authUser
};

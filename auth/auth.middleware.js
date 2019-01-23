const jwt = require("jsonwebtoken");

module.exports = function(ctx, next) {
  if (env.REQUIRES_AUTH === false) return next();

  const bearerOrToken =
    ctx.request.header["authorization"] || ctx.request.header["x-auth-token"];

  if (!bearerOrToken) {
    ctx.status = 400;
    ctx.body = "Access denied. No token provided.";
  } else {
    let key;
    if (bearerOrToken.includes("Bearer")) {
      const keys = bearerOrToken.split(" ");
      key = keys[1];
    } else {
      key = bearerOrToken;
    }

    return next().then(() => {
      try {
        jwt.verify(key, process.env.SECRET);
      } catch (err) {
        ctx.status = 401;
        ctx.body = "Failed to authenticate token.";
      }
    });
  }
};

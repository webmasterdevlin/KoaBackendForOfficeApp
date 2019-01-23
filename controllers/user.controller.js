const userService = require("../services/user.service.mongoose");
const Joi = require("joi");

async function retrieveUsers(ctx) {
  ctx.status = 200;
  try {
    ctx.body = await userService.getAllFromDb();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}

async function retrieveOneUser(ctx) {
  try {
    ctx.status = 200;
    ctx.body = await userService.getById(ctx.params.id);
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}

async function saveUser(ctx) {
  console.dir(ctx.request.body);
  const { error } = validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = error.details[0].message;
  } else {
    try {
      ctx.status = 201;
      await userService.add(ctx.request.body);
      ctx.body = { created: ctx.request.body.username };
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      throw err;
    }
  }
}

async function updateUser(ctx) {
  const { error } = validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = error.details[0].message;
  } else {
    try {
      ctx.status = 200;
      ctx.body = await userService.update(ctx.params.id, ctx.request.body);
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      throw err;
    }
  }
}

async function removeUser(ctx) {
  try {
    ctx.status = 204;
    ctx.body = await userService.remove(ctx.params.id);
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}
function validate(body) {
  const schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
  };
  return Joi.validate(body, schema);
}

module.exports = {
  retrieveUsers,
  retrieveOneUser,
  saveUser,
  updateUser,
  removeUser
};

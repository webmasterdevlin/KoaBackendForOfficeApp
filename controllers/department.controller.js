const departmentService = require("../services/department.service.mongoose");
const Joi = require("joi");

async function retrieveDepartments(ctx) {
  ctx.status = 200;
  try {
    ctx.body = await departmentService.getAllFromDb();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}

async function retrieveOneDepartment(ctx) {
  try {
    ctx.status = 200;
    ctx.body = await departmentService.getById(ctx.params.id);
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}

async function saveDepartment(ctx) {
  const { error } = validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = error.details[0].message;
  } else {
    try {
      ctx.status = 201;
      ctx.body = await departmentService.add(ctx.request.body);
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      throw err;
    }
  }
}

async function updateDepartment(ctx) {
  const { error } = validate(ctx.request.body);
  if (error) {
    ctx.status = 400;
    ctx.body = error.details[0].message;
  } else {
    try {
      ctx.status = 200;
      ctx.body = await departmentService.update(
        ctx.params.id,
        ctx.request.body
      );
    } catch (err) {
      err.status = err.statusCode || err.status || 500;
      throw err;
    }
  }
}

async function removeDepartment(ctx) {
  try {
    ctx.status = 204;
    ctx.body = await departmentService.remove(ctx.params.id);
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    throw err;
  }
}

function validate(body) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(12),
    description: Joi.string()
      .min(6)
      .max(244),
    head: Joi.string()
      .min(6)
      .max(244),
    code: Joi.string()
      .min(2)
      .max(12)
  };
  return Joi.validate(body, schema);
}

module.exports = {
  retrieveDepartments,
  retrieveOneDepartment,
  saveDepartment,
  updateDepartment,
  removeDepartment
};

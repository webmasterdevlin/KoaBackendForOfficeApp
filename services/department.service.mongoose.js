const Department = require("../models/department.model.mongoose");

async function getAllFromDb() {
  return await Department.find({});
}

async function getById(id) {
  return await Department.findById(id);
}

async function add(newDepartment) {
  const department = new Department({
    name: newDepartment.name,
    description: newDepartment.description,
    head: newDepartment.head,
    code: newDepartment.code
  });

  try {
    return await (rawResult = department.save());
  } catch (e) {
    throw e.message;
  }
}

async function update(id, body) {
  try {
    await Department.findOneAndUpdate({ _id: id }, body, {
      new: true
    });
  } catch (e) {
    throw e;
  }
}

async function remove(id) {
  try {
    await Department.findOneAndDelete({ _id: id });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getAllFromDb,
  getById,
  add,
  update,
  remove
};

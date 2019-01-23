const Department = require("../models/department.model.sequelize");

function getAllFromDb() {}

function getById(id) {}

// This is async/await implementation
async function add(newDepartment) {
  const department = new Department({
    name: newDepartment.name,
    description: newDepartment.description,
    head: newDepartment.head,
    code: newDepartment.code
  });
}

async function update(id, body) {}

async function remove(id) {}

// module.exports = {
//   getAllFromDb,
//   getById,
//   add,
//   update,
//   remove
// };

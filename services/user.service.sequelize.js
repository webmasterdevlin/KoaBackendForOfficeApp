const User = require("../models/user.model.sequelize");

function getAllFromDb() {}

function getById(id) {}

// This is async/await implementation
async function add(newUser) {
  const department = new User({
    name: newUser.name,
    description: newUser.description,
    head: newUser.head,
    code: newUser.code
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

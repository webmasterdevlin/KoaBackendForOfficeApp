const User = require("../models/user.model.mongoose");
const bcrypt = require("bcryptjs");

async function getAllFromDb() {
  return await User.find({}).select("-password");
}

async function getById(id) {
  return await User.findById(id).select("-password");
}

// This is async/await implementation
async function add(newUser) {
  // validate
  if (!newUser.password) throw "Password is required";
  if (await User.findOne({ username: newUser.username }))
    throw `Username ${newUser.username} is already taken`;

  const user = new User({
    username: newUser.username,
    email: newUser.email,
    password: await bcrypt.hashSync(newUser.password, await bcrypt.genSalt(10))
  });

  try {
    return await (rawResult = user.save());
  } catch (e) {
    throw e.message;
  }
}

async function update(id, body) {
  try {
    await User.findOneAndUpdate({ _id: id }, body, {
      new: true
    });
  } catch (error) {
    return error;
  }
}

async function remove(id) {
  try {
    await User.findOneAndDelete({ _id: id });
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllFromDb,
  getById,
  add,
  update,
  remove
};

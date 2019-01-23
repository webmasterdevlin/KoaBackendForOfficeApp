const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const LoginUser = require("../models/user.model.mongoose");

function verifyUser(userParam) {
  const user = LoginUser.findOne({ email: userParam.email });
  return !!user;
}

async function sign({ email, password }) {
  const user = await LoginUser.findOne({ email });
  if (!user) {throw Error("Can't find user");}

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {throw Error("Can't authenticate user");}

  const token = jwt.sign({ sub: user._id }, process.env.SECRET, {
    expiresIn: "1h"
  });
  return { token };
}

module.exports = {
  verifyUser,
  sign
};

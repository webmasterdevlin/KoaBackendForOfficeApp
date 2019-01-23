require("dotenv").config();

env = {
  NODE_ENV: process.env.NODE_ENV,
  MLAB_URI: process.env.MLAB_URI,
  MONGODB_URI: process.env.MONGODB_URI
};

module.exports = env;

const winston = require("winston");
const env = require("./config");
const mongoose = require("mongoose");
const dbType =
  env.NODE_ENV === "production" ? "localhost MongoDB" : "cloud MongoDB service";

mongoose.Promise = global.Promise;
const mongoDB = env.NODE_ENV === "production" ? env.MONGODB_URI : env.MLAB_URI;
mongoose
  .connect(
    mongoDB,
    { useNewUrlParser: true }
  )
  .then(() => winston.info(`Connected to ${dbType}`));

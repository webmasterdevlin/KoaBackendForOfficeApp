const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" }
  },
  { timestamps: { createdAt: "created_at" } }
);

UserSchema.set("toJSON", {
  virtuals: true
});

mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");

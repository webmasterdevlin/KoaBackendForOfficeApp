const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema(
  {
    // name: {type: String, required: true}, # To set a required property
    name: String,
    description: String,
    head: String,
    code: String
  },
  { timestamps: { createdAt: "created_at" } }
);

//Transform
DepartmentSchema.set("toJSON", {
  virtuals: true
});

mongoose.model("Department", DepartmentSchema);

module.exports = mongoose.model("Department");

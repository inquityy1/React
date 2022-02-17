const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  studentNumber: Number,
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;

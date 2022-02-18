const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  studentNumber: Number,
  articleCount: Number,
  grade: Number,
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;

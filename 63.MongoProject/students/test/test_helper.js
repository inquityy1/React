const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_test", {
  useNewUrlParser: true,
});

mongoose.connetction
  .once("open", () => console.log("we are connected"))
  .on("error", (error) => {
    console.warn("An error accured", error);
  });

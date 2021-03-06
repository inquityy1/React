const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_test", {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("we are connected"))
  .on("error", (error) => {
    console.warn("An error accured", error);
  });

beforeEach((done) => {
  // mongoose.connection.collections.students.drop();
  // done();

  const { students, comments, articleblogs } = mongoose.connection.collections;

  students.drop(() => {
    comments.drop(() => {
      articleblogs.drop(() => {
        done();
      });
    });
  });
});

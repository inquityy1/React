const assert = require("assert");
const Student = require("../src/student");

describe("Subdocument", () => {
  //   it("Creating a subdocument", (done) => {
  //     const jason = new Student({
  //       name: "Jason",
  //       articles: [{ title: "JavaScript" }],
  //     });
  //     jason.save().then(() => {
  //       Student.findOne({ name: "Jason" }).then((student) => {
  //         assert(student.articles[0].title === "JavaScript");
  //         done();
  //       });
  //     });
  //   });

  it("Adding new record", (done) => {
    const jason = new Student({ name: "Jason", articles: [] });
    jason
      .save()
      .then(() => Student.findOne({ name: "Jason" }))
      .then((student) => {
        student.articles.push({ title: "MongoDB" });
        return student.save();
      })
      .then(() => Student.findOne({ name: "Jason" }))
      .then((student) => {
        assert(student.articles[0].title === "MongoDB");
        done();
      });
  });
});

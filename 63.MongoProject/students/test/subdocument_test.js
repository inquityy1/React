const assert = require("assert");
const Student = require("../src/student");

describe("Subdocument", () => {
  it("Creating a subdocument", (done) => {
    const jason = new Student({
      name: "Jason",
      articles: [{ title: "JavaScript" }],
    });
    jason.save().then(() => {
      Student.findOne({ name: "Jason" }).then((student) => {
        assert(student.articles[0].title === "JavaScript");
        done();
      });
    });
  });
});

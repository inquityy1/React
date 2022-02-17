const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", () => {
  let jason;

  beforeEach((done) => {
    jason = new Student({ name: "Jason" });
    jason.save().then(() => done());
  });

  it("set and save", (done) => {
    console.log(jason);
    jason.set("name", "Alex");
    jason
      .save()
      .then(() => Student.find({}))
      .then((students) => {
        assert(students[0].name === "Alex");
      });
    done();
  });
});

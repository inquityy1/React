const assert = require("assert");
const Student = require("../src/student");

describe("Read the data", () => {
  let jason;

  beforeEach((done) => {
    jason = new Student({ name: "Jason" });
    jason.save().then(() => done());
  });

  it("Find all Jasons", async () => {
    const students = await Student.find({ name: "Jason" });
    console.log(students);
    assert(students[0]._id.toString() !== jason._id.toString());
  });
});

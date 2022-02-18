const assert = require("assert");
const Student = require("../src/student");

describe("validation", () => {
  it("name is required", () => {
    const student = new Student({ name: undefined });
    const result = student.validateSync();
    console.log(result);
    const { message } = result.errors.name;
    assert(message === "Name is required");
  });
});

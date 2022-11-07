const { Cheese, Board, User, Bread, Fruit } = require("../models");

describe("User Model Test", () => {
  test("Checks if it has an ID", async () => {
    let perfect = false;
    await User.create({ name: "test" });
    const test = await User.findOne({ where: { name: "test" } });
    if (typeof test.id == "number") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has an email", async () => {
    let perfect = false;
    await User.create({ name: "test" });
    const test = await User.findOne({ where: { name: "test" } });
    if (test.email == null) {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has an name", async () => {
    let perfect = false;
    await User.create({ name: "test" });
    const test = await User.findOne({ where: { name: "test" } });
    if (test.name == "test") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });
});

describe("Cheese Model Test", () => {
  test("Checks if it has an ID", async () => {
    let perfect = false;
    await Cheese.create({ title: "test" });
    const test = await Cheese.findOne({ where: { title: "test" } });
    if (typeof test.id == "number") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has a title", async () => {
    let perfect = false;
    await Cheese.create({ title: "test" });
    const test = await Cheese.findOne({ where: { title: "test" } });
    if (test.title == "test") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has a description", async () => {
    let perfect = false;
    await Cheese.create({ description: "test" });
    const test = await Cheese.findOne({ where: { description: "test" } });
    if (test.description == "test") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });
});

describe("Board Model Test", () => {
  test("Checks if it has an ID", async () => {
    let perfect = false;
    await Board.create({ type: "test" });
    const test = await Board.findOne({ where: { type: "test" } });
    if (typeof test.id == "number") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has a type", async () => {
    let perfect = false;
    await Board.create({ type: "test" });
    const test = await Board.findOne({ where: { type: "test" } });
    if (test.type == "test") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });

  test("Checks if it has a description", async () => {
    let perfect = false;
    await Cheese.create({ description: "test" });
    const test = await Cheese.findOne({ where: { description: "test" } });
    if (test.description == "test") {
      perfect = true;
    }
    console.log(test);
    expect(perfect).toBeTruthy();
  });
});

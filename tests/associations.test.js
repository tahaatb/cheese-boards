const { Cheese, Board, User, Bread, Fruit } = require("../models");

describe("Does User and Board have a one-to-many relationship?", () => {
  test("Multiple boards can be added to a user", async () => {
    let perfect = false;
    const taha = await User.findOne({ where: { name: "Taha" } });
    const simple = await Board.findOne({ where: { type: "Simple" } });
    const brunch = await Board.findOne({ where: { type: "Brunch" } });
    taha.addBoard([simple, brunch]);

    const first = await Board.findOne({ where: { id: 1 } });
    const second = await Board.findOne({ where: { id: 1 } });
    if (first.UserId == 1 && second.UserId == 1) {
      perfect = true;
    }
    expect(perfect).toBeTruthy;
  });
});

describe("Does Board and Cheese have a Many-to-many relationship?", () => {
  test("Multiple boards can be added to Cheese", async () => {
    let perfect = true;
    const goat = await Cheese.findByPk(4);
    const boards = await Board.findAll();
    await goat.addBoard(boards);
    const test = await goat.getBoards();

    test.map((t) => {
      if (t.toJSON().cheese_board.CheeseId != 4) {
        perfect = false;
      }
    });

    expect(perfect).toBeTruthy;
  });

  test("Multiple cheeses can be added to Board", async () => {
    let perfect = false;
    const simple = await Board.findOne({ where: { type: "Simple" } });
    const cheeses = await Cheese.findAll();
    await simple.addCheeses(cheeses);
    const test = await simple.getCheeses();

    test.map((t) => {
      if (t.toJSON().cheese_board.BoardId == 1) {
        perfect = true;
      }
    });

    expect(perfect).toBeTruthy;
  });
});

describe("A user can be loaded with it's boards", () => {
  test("Multiple boards can be added to a user", async () => {
    let perfect = false;
    const taha = await User.findOne({ where: { name: "Taha" } });
    const simple = await Board.findOne({ where: { type: "Simple" } });
    const brunch = await Board.findOne({ where: { type: "Brunch" } });
    taha.addBoard([simple, brunch]);

    const first = await Board.findOne({ where: { id: 1 } });
    const second = await Board.findOne({ where: { id: 1 } });
    if (first.UserId == 1 && second.UserId == 1) {
      perfect = true;
    }
    expect(perfect).toBeTruthy;
  });
});

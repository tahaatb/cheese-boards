const Cheese = require("./cheese.model");
const Board = require("./board.model");
const User = require("./user.model");
const Bread = require("./bread.model");
const Fruit = require("./fruit.model");

// One-to-many
User.hasMany(Board);
Board.belongsTo(User);
// Many-to-Many
Cheese.belongsToMany(Board, { through: "cheese_board" });
Board.belongsToMany(Cheese, { through: "cheese_board" });

Bread.belongsToMany(Board, { through: "bread_board" });
Board.belongsToMany(Bread, { through: "bread_board" });

Fruit.belongsToMany(Board, { through: "fruit_board" });
Board.belongsToMany(Fruit, { through: "fruit_board" });

module.exports = { Cheese, Board, User, Bread, Fruit };

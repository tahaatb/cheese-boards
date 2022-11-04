const { Cheese, Board, User, Bread, Fruit } = require("../models");
const db = require("./db");

async function seed() {
  await db.sync({
    force: true,
  });

  await Cheese.bulkCreate([
    {
      title: "Blue cheese",
      description:
        "Cheese containing veins of blue mould, such as Stilton and Danish Blue.",
    },
    {
      title: "Brie",
      description:
        "Pale in color with a slight grayish tinge under a rind of white mould.",
    },
    {
      title: "Havarti",
      description:
        "Interior-ripened cheese that is rindless, smooth, and slightly bright-surfaced.",
    },
    {
      title: "Goat's cheese",
      description: "Crumbly to creamy, young to mature, mild to tangy.",
    },
    {
      title: "Dairy-free ricotta",
      description:
        "Smooth cheese with a creamy mild taste and a thick texture.",
    },
    {
      title: "Cream cheese",
      description: "Mild, sweet taste with a pleasant slight tang.",
    },
  ]);

  await Board.bulkCreate([
    {
      type: "Simple",
      description:
        "This everyday simple charcuterie board simply takes the 'formula' of ingredients above and chooses a selection of each for a simple and delicious treat for any occasion.",
      rating: 7,
    },
    {
      type: "Thanksgiving",
      description:
        "Classic cheese and ingredients and is perfect for using up healthy Thanksgiving recipes leftovers, too!",
      rating: 8,
    },
    {
      type: "Vegan",
      description:
        "This vegan charcuterie board follows a similar formula but with dairy-free ingredients. I’ve included more fresh veggies in this board, too, for lots of eat the rainbow ingredients.",
      rating: 7,
    },
    {
      type: "Brunch",
      description:
        "This brunch charcuterie board is any brunch-lovers dream with a combination of sweet and savory elements.",
      rating: 9,
    },
    {
      type: "Christmas",
      description:
        "Contains breads and ingredients that are popular around Christmas time and can easily be adapted to what you have in your own kitchen.",
      rating: 9,
    },
  ]);

  await User.bulkCreate([
    {
      name: "Taha",
      email: "taha@gmail.com",
    },
    {
      name: "Lonie",
      email: "lonie@gmail.com",
    },
    {
      name: "Esgrid",
      email: "esgrid@gmail.com",
    },
    {
      name: "Matthew",
      email: "matthew@gmail.com",
    },
    {
      name: "Andy",
      email: "Andy@gmail.com",
    },
    {
      name: "Simon",
      email: "simon@gmail.com",
    },
    {
      name: "Aliya",
      email: "aliya@gmail.com",
    },
    {
      name: "Bernard",
      email: "bernard@gmail.com",
    },
  ]);

  await Bread.bulkCreate([
    {
      name: "Baguette",
      description: "Long, thin type of bread of French origin.",
    },
    {
      name: "Parmesan crisps",
      description: "Crispy, cheesy delight.",
    },
    {
      name: "Crackers",
      description: "flat, dry baked food typically made with flour.",
    },
    {
      name: "Mini ciabatta buns",
      description:
        "Airy texture with large irregular holes in the loaf along with a tangy (almost sourdough) flavor.",
    },
    {
      name: "Sweet potato and beet chips",
      description: "Sweet and crispy.",
    },
    {
      name: "Fruit and nut bread",
      description: "Soft and fluffy with full of buttery and fruity goodness.",
    },
    {
      name: "Stollen",
      description:
        "Sweet and flaky, commonly filled with nuts and fruits and topped with lots of powdered sugar.",
    },
    {
      name: "Panettone",
      description:
        "Wedge-like slices are soft with a bit of spongy pushback to the bite, but not too much.",
    },
  ]);
  await Fruit.bulkCreate([
    {
      name: "Apricots",
      description: "Sweet like a peach with just a tiny punch of sour flavor.",
    },
    {
      name: "Dates",
      description: "Sweet with a rich, intensive caramel-like taste.",
    },
    {
      name: "Cherries",
      description:
        "Sweet and sour, with slightly woody flavors and almond aromas.",
    },
    {
      name: "Figs",
      description:
        "Honey-like sweetness with a subtle hint of berry and fresher shades of the flavor.",
    },
    {
      name: "Olives",
      description: "Firm texture and lovely, nutty flavor.",
    },
    {
      name: "Pomegranate",
      description: "Fairly tart with a bit of sweetness underneath.",
    },
    {
      name: "Pears",
      description: "sweet, slightly citrus flavor.",
    },
    {
      name: "Apples",
      description: "A little sweet and a little tart.",
    },
    {
      name: "Grapes",
      description: "Rich, sweet taste and firm, crunchy texture.",
    },
    {
      name: "Zucchini",
      description: "Mild taste that verges on sweet.",
    },
    {
      name: "Cucumber",
      description:
        "Crisp texture, mild taste of the inner flesh, and slightly bitter flavor of the skin.",
    },
    {
      title: "Roasted bell peppers",
      description: "Lightly sweet, charred flavor.",
    },
    {
      title: "Raspberries",
      description:
        "Fresh juicy fruit with slightly crunchy floral undertones blended with woody notes taste at the end.",
    },
    {
      title: "Cranberries",
      description: "Bitter, starchy and tart flavor.",
    },
  ]);
}

seed();

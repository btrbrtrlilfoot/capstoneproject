"use strict";

const db = require("../server/db");
const { User, Product, Offer } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  //dummy users
  const user1 = await User.create({
    name: "Kiana",
    email: "kiana@email.com",
    password: "123",
    location: [40.7050579, -74.0090341],
    isAdmin: true
  });
  const user2 = await User.create({
    name: "Rachel",
    email: "rachel@email.com",
    password: "123",
    location: [40.709195, -74.0128613],
    isAdmin: true,
    phoneNumber: "Some number & need to verify"
  });
  const user3 = await User.create({
    name: "Tashi",
    email: "tashi@email.com",
    password: "123",
    location: [40.709195, -74.0128613],
    isAdmin: true,
    phoneNumber: "+12409184882"
  });

  const user4 = await User.create({
    name: "Cody",
    email: "cody@email.com",
    password: "123",
    location: [40.7350579, -74.0090341],
    isAdmin: false
  });

  const user5 = await User.create({
    name: "Murphy",
    email: "murphy@email.com",
    password: "123",
    location: [40.7050579, -74.0090341],
    isAdmin: false
  });

  //fake products
  const product1 = await Product.create({
    name: "Juicer",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "kitchen items", "cooking", "juice"],
    imageUrl: "Juicer.jpg"
  });
  const product2 = await Product.create({
    name: "i-phone 10",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "phone", "technology", "apple"],
    imageUrl: "I-Phone10.jpeg"
  });
  const product3 = await Product.create({
    name: "Mac Book Air 2015",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "computer", "technology", "apple", "new"],
    imageUrl: "macbookair-2015.jpg"
  });
  const product4 = await Product.create({
    name: "Sony Headphones",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "technology", "sony products"],
    imageUrl: "sonyheadphones.jpg"
  });
  const product5 = await Product.create({
    name: "Pack of Pokemon Cards",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "card games", "fun", "new"],
    imageUrl: "pokemoncards.jpg"
  });
  const product6 = await Product.create({
    name: "Samsung TV set",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "TV", "Samsung products", "new"],
    imageUrl: "samsungTV.jpg"
  });
  const product7 = await Product.create({
    name: "Rayban Glasses",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "TV", "Samsung products", "new"],
    imageUrl: "rayban.jpeg"
  });
  const product8 = await Product.create({
    name: "Nike Hoodie",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "clothes", "new"],
    imageUrl: "nikehoodie.jpg"
  });
  const product9 = await Product.create({
    name: "Adidas Sports Bag",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "bags", "Adidas", "worn"],
    imageUrl: "addidasbag.jpg"
  });
  const product10 = await Product.create({
    name: "Ramen Noodles",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    tags: ["item", "food", "Japanese"],
    imageUrl: "ramen.jpg"
  });
  const product11 = await Product.create({
    name: "Clock",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "clock.jpg"
  });

  const product12 = await Product.create({
    name: "Xbox 360",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "xbox.jpg"
  });
  const product13 = await Product.create({
    name: "Bike",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "bike.jpg"
  });
  const product14 = await Product.create({
    name: "Lightsaber",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "lightsaber.jpg"
  });

  const product15 = await Product.create({
    name: "Printer",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "printer.jpg"
  });

  const product16 = await Product.create({
    name: "Wash dishes for an hour",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "service.png"
  });

  const product17 = await Product.create({
    name: "Make delicious lunch",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "service.png"
  });

  const product19 = await Product.create({
    name: "Help with assignment",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "service.png"
  });
  const product20 = await Product.create({
    name: "Teach basic German",
    kind: "service",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "German.jpg"
  });

  const product21 = await Product.create({
    name: "Calculator",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "calculator.jpg"
  });

  const product22 = await Product.create({
    name: "Pen",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "fountainpen.jpg"
  });

  const product23 = await Product.create({
    name: "Collection of Daniel Steel Novels",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "danielsteelbooks.jpeg"
  });

  const product24 = await Product.create({
    name: "Selfie Stick",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "selfiestick.jpg"
  });

  const product25 = await Product.create({
    name: "Bracelet",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    imageUrl: "bracelet.jpg"
  });

  //offers
  await user2.addProduct(product11);
  await user2.addProduct(product12);
  await user3.addProduct(product13);
  await user1.addProduct(product14);
  await user1.addProduct(product15);
  await user2.addProduct(product16);
  await user3.addProduct(product17);
  await user2.addProduct(product19);
  await user3.addProduct(product21);
  await user1.addProduct(product22);
  await user3.addProduct(product23);
  await user2.addProduct(product24);
  await user2.addProduct(product25);

  //open auctions
  await user1.addProduct(product1);
  await product1.addOffer(product12, { through: { status: "pending" } });
  await product1.addOffer(product13, { through: { status: "pending" } });

  await user2.addProduct(product2);
  await product2.addOffer(product14, { through: { status: "pending" } });

  await user3.addProduct(product3);
  await product3.addOffer(product16, { through: { status: "pending" } });

  await user1.addProduct(product4);
  await product4.addOffer(product19, { through: { status: "pending" } });
  await product4.addOffer(product21, { through: { status: "pending" } });

  await user2.addProduct(product5);
  await product5.addOffer(product22, { through: { status: "pending" } });
  await product5.addOffer(product23, { through: { status: "pending" } });

  //closed auction
  await user3.addProduct(product6);
  await product6.addOffer(product24, { through: { status: "accepted" } });

  await user1.addProduct(product7);
  await product7.addOffer(product17, { through: { status: "accepted" } });

  await user2.addProduct(product8);
  await product8.addOffer(product15, { through: { status: "accepted" } });

  await user3.addProduct(product9);
  await product9.addOffer(product25, { through: { status: "accepted" } });

  await user1.addProduct(product10);
  await product10.addOffer(product11, { through: { status: "accepted" } });

  await user1.addProduct(product20);

  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

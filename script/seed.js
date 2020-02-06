"use strict";

const db = require("../server/db");
const { User, Product, Offer } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  //dummy users
  const user1 = await User.create({
    firstName: "Kiana",
    lastName: "W",
    email: "kiana@email.com",
    password: "123",
    location: "NYC",
    isAdmin: true
  });
  const user2 = await User.create({
    firstName: "Rachel",
    lastName: "T",
    email: "rachel@email.com",
    password: "123",
    location: "NYC",
    isAdmin: true
  });
  const user3 = await User.create({
    firstName: "Tashi",
    lastName: "D",
    email: "tashi@email.com",
    password: "123",
    location: "NYC",
    isAdmin: true
  });
  const user4 = await User.create({
    firstName: "Cody",
    lastName: "N",
    email: "cody@email.com",
    password: "123",
    location: "NYC",
    isAdmin: false
  });
  const user5 = await User.create({
    firstName: "Murphy",
    lastName: "M",
    email: "murphy@email.com",
    password: "123",
    location: "NYC",
    isAdmin: false
  });

  //fake products
  const product1 = await Product.create({
    name: "Juicer",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product2 = await Product.create({
    name: "i-phone 10",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product3 = await Product.create({
    name: "Mac Book Air 2015",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product4 = await Product.create({
    name: "Sony Headphones",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product5 = await Product.create({
    name: "Pack of Pokemon Cards",
    kind: "item",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product6 = await Product.create({
    name: "Samsung TV set",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product7 = await Product.create({
    name: "Rayban Glasses",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product8 = await Product.create({
    name: "Nike Hoodie",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product9 = await Product.create({
    name: "Adidas Sports Bag",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product10 = await Product.create({
    name: "Ramen Noodles",
    kind: "item",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product11 = await Product.create({
    name: "Clock",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product12 = await Product.create({
    name: "Xbox 360",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product13 = await Product.create({
    name: "Bike",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product14 = await Product.create({
    name: "Lightsaber",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product15 = await Product.create({
    name: "Printer",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product16 = await Product.create({
    name: "wash dishes for an hour",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product17 = await Product.create({
    name: "make lunch for you",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product18 = await Product.create({
    name: "look after your pet",
    kind: "service",
    type: "auction (open)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product19 = await Product.create({
    name: "help with your assignment",
    kind: "service",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });
  const product20 = await Product.create({
    name: "teach you basic German",
    kind: "service",
    type: "auction (closed)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product21 = await Product.create({
    name: "Calculator",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product22 = await Product.create({
    name: "Pen",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product23 = await Product.create({
    name: "Novel",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product24 = await Product.create({
    name: "Selfie Stick",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  const product25 = await Product.create({
    name: "Bracelet",
    kind: "item",
    type: "offer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  });

  //open auctions
  await user4.addProduct(product1);
  await product1.addOffer(product11, { through: { status: "pending" } });
  await product1.addOffer(product12, { through: { status: "pending" } });

  await user4.addProduct(product2);
  await product2.addOffer(product13, { through: { status: "pending" } });
  await product2.addOffer(product14, { through: { status: "pending" } });

  await user4.addProduct(product3);
  await product3.addOffer(product13, { through: { status: "pending" } });
  await product3.addOffer(product14, { through: { status: "pending" } });

  await user5.addProduct(product4);
  await product4.addOffer(product15, { through: { status: "pending" } });
  await product4.addOffer(product16, { through: { status: "pending" } });

  await user5.addProduct(product5);
  await product5.addOffer(product17, { through: { status: "pending" } });
  await product5.addOffer(product19, { through: { status: "pending" } });

  //closed auction
  await user5.addProduct(product6);
  await product6.addOffer(product21, { through: { status: "accepted" } });

  await user4.addProduct(product7);
  await product7.addOffer(product17, { through: { status: "rejected" } });
  await product7.addOffer(product19, { through: { status: "rejected" } });

  await user5.addProduct(product8);
  await product8.addOffer(product15, { through: { status: "rejected" } });
  await product8.addOffer(product16, { through: { status: "rejected" } });

  await user4.addProduct(product9);
  await product9.addOffer(product22, { through: { status: "accepted" } });
  await product9.addOffer(product23, { through: { status: "rejected" } });

  await user5.addProduct(product10);
  await product10.addOffer(product23, { through: { status: "accepted" } });

  await user4.addProduct(product18);
  await product18.addOffer(product24, { through: { status: "rejected" } });

  await user5.addProduct(product20);
  await product20.addOffer(product25, { through: { status: "accepted" } });

  //offers
  await user1.addProduct(product11);
  await user2.addProduct(product12);
  await user3.addProduct(product13);
  await user1.addProduct(product14);
  await user2.addProduct(product15);
  await user3.addProduct(product16);
  await user1.addProduct(product17);
  await user2.addProduct(product19);
  await user3.addProduct(product21);
  await user1.addProduct(product22);
  await user2.addProduct(product23);
  await user3.addProduct(product24);
  await user3.addProduct(product25);

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

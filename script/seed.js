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
    location: [40.709195, -74.1128613],
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
    name: "John",
    email: "john@email.com",
    password: "123",
    location: [40.7350579, -75.0090341],
    isAdmin: false
  });

  const user5 = await User.create({
    name: "Juan",
    email: "juan@email.com",
    password: "123",
    location: [40.7050579, -74.0098341],
    isAdmin: false
  });

  //fake products
  const product1 = await Product.create({
    name: "Juicer",
    kind: "item",
    type: "auction (open)",
    description:
      "Used but in good condition NutriBullet 900. Great for fruits, veggies, and greens. Perfect for making smoothies",
    tags: ["item", "kitchen items", "cooking", "juice"],
    imageUrl: "Juicer.jpg"
  });
  const product2 = await Product.create({
    name: "i-phone 10",
    kind: "item",
    type: "auction (open)",
    description:
      "Small crack on the screen, but the battery life is excellent! Comes with charger and Otterbox case",
    tags: ["item", "phone", "technology", "apple"],
    imageUrl: "I-Phone10.jpeg"
  });
  const product3 = await Product.create({
    name: "Mac Book Air 2015",
    kind: "item",
    type: "auction (open)",
    description:
      "Brand new, perfect condition! Purchased by a friend who had to suddenly leave the country and left it behind. Comes with charger, laptop sleeve, HDMI adapter, and CD drive.",
    tags: ["item", "computer", "technology", "apple", "new"],
    imageUrl: "macbookair-2015.jpg"
  });
  const product4 = await Product.create({
    name: "Sony Headphones",
    kind: "item",
    type: "auction (open)",
    description:
      "From Sony's Website: Sit back, relax and prepare to experience a new level of audio excellence. These headphones combine cutting-edge technology with the finest craftsmanship, for the ultimate listening experience.",
    tags: ["item", "technology", "sony products"],
    imageUrl: "sonyheadphones.jpg"
  });
  const product5 = await Product.create({
    name: "Pack of Pokemon Cards",
    kind: "item",
    type: "auction (open)",
    description: "Extremely rare cards included",
    tags: ["item", "card games", "fun", "new"],
    imageUrl: "pokemoncards.jpg"
  });
  const product6 = await Product.create({
    name: "Samsung TV set",
    kind: "item",
    type: "auction (closed)",
    description:
      "Class - LED - NU6900 Series - 2160p - Smart - 4K UHD TV with HDR. Access your streaming services all in one place using the Samsung remote control.",
    tags: ["item", "TV", "Samsung products", "new"],
    imageUrl: "samsungTV.jpg"
  });
  const product7 = await Product.create({
    name: "Rayban Glasses",
    kind: "item",
    type: "auction (closed)",
    description: "Vintage & Extremely stylish with UV resistant lenses.",
    tags: ["item", "TV", "Samsung products", "new"],
    imageUrl: "rayban.jpeg"
  });
  const product8 = await Product.create({
    name: "Nike Hoodie",
    kind: "item",
    type: "auction (closed)",
    description:
      "Size small, warm enough to wear under a jacket even in midwinter. Bought this for my little brother but he doesn't want it, so it's brand new and still has the tags on!",
    tags: ["item", "clothes", "new"],
    imageUrl: "nikehoodie.jpg"
  });
  const product9 = await Product.create({
    name: "Adidas Sports Bag",
    kind: "item",
    type: "auction (closed)",
    description:
      "Sturdy, roomy, and trendy. You'll never skip another workout once you have this bad boy to show off",
    tags: ["item", "bags", "Adidas", "worn"],
    imageUrl: "addidasbag.jpg"
  });
  const product10 = await Product.create({
    name: "Ramen Noodles",
    kind: "item",
    type: "auction (closed)",
    description:
      "Satisfy your salt cravings with this tasty, quick, easy classic.",
    tags: ["item", "food", "Japanese"],
    imageUrl: "ramen.jpg"
  });
  const product11 = await Product.create({
    name: "Clock",
    kind: "item",
    type: "offer",
    description:
      "This clock belonged to my grandfather. He was a trained woodworker and handcrafted this in 1937. Its base is made out of mahogany, and the face is made from tempered glass. Roman numerals provide an instant old-days charm to any room this clock is placed in",
    imageUrl: "clock.jpg"
  });

  const product12 = await Product.create({
    name: "Xbox 360",
    kind: "item",
    type: "offer",
    description:
      "With the largest library of games, Xbox 360 has something for everyone. Play blockbuster titles like Halo, Forza Motorsport, and Madden/FIFA. Enjoy unrivaled multiplayer games online with friends, and watch HD movies, TV shows, live events, music and sports. Plus, the spacious 500GB hard drive gives you more storage for games, entertainment and demos. And now with a sleek new design, Xbox 360 looks better than ever.",
    imageUrl: "xbox.jpg"
  });
  const product13 = await Product.create({
    name: "Bike",
    kind: "item",
    type: "offer",
    description:
      "Save a fortune on gym fees AND gas by biking to work! Sturdy 12 speed is usable in almost any terrain. Make sure you check the tire pressure and chain regularly, as it is an older bike. ",
    imageUrl: "bike.jpg"
  });
  const product14 = await Product.create({
    name: "Lightsaber",
    kind: "item",
    type: "offer",
    description:
      "Lightweight yet sturdy. Had it for ten years, but my kids don't play with it anymore. It has a lot of sentimental value so I don't want to throw it out. Please take it! ",
    imageUrl: "lightsaber.jpg"
  });

  const product15 = await Product.create({
    name: "Printer",
    kind: "item",
    type: "offer",
    description: "InkJet350 series. Comes with pack of black ink!",
    imageUrl: "printer.jpg"
  });

  const product16 = await Product.create({
    name: "Wash dishes for an hour",
    kind: "service",
    type: "offer",
    description:
      "Finally, you can relax and enjoy a nice dinner at home without having to worry about a mountain of dishes! I will take care of it all",
    imageUrl: "service.png"
  });

  const product17 = await Product.create({
    name: "Make delicious lunch",
    kind: "service",
    type: "offer",
    description:
      "I am currently in culinary school and am looking to practice my skills on different dishes. Provide the necessary ingredients & cookware and I will make you whatever you want!",
    imageUrl: "service.png"
  });

  const product19 = await Product.create({
    name: "Help with assignment",
    kind: "service",
    type: "offer",
    description:
      "I am a student an engineering student at Brooklyn College. I can help with any high school level math, calculus, or physics class.",
    imageUrl: "service.png"
  });
  const product20 = await Product.create({
    name: "Teach basic German",
    kind: "service",
    type: "auction (open)",
    description:
      "If you would like to become conversational in German and expand your cultural horizons, hit me up! I am a native German speaker who moved to New York ten years ago",
    imageUrl: "German.jpg"
  });

  const product21 = await Product.create({
    name: "Calculator",
    kind: "item",
    type: "offer",
    description:
      "TI84, great condition. Graphing, programming, and statistic functionality",
    imageUrl: "calculator.jpg"
  });

  const product22 = await Product.create({
    name: "Pen",
    kind: "item",
    type: "offer",
    description: "Classic feather quill, comes with ink well",
    imageUrl: "fountainpen.jpg"
  });

  const product23 = await Product.create({
    name: "Collection of Daniel Steel Novels",
    kind: "item",
    type: "offer",
    description: "Paperback, like new",
    imageUrl: "danielsteelbooks.jpeg"
  });

  const product24 = await Product.create({
    name: "Selfie Stick",
    kind: "item",
    type: "offer",
    description:
      "great reach, provides the perfect angle for selfies. It can fit up to five people in one pic!",
    imageUrl: "selfiestick.jpg"
  });

  const product25 = await Product.create({
    name: "Bracelet",
    kind: "item",
    type: "offer",
    description:
      "Handmade with goodluck charms. Classic and goes with everything",
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

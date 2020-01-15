const Product = require('../models/product');
const mongoose = require('mongoose');

// connect database
const connectDB = () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/shopping-cart', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected - mongodb://127.0.0.1:27017/shopping-cart');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

const products = [
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg',
    title: 'BioShock',
    description: 'BioShock is a 2007 first-person shooter game developed by 2K Boston and 2K Australia, and published by 2K Games. It is the first game in the Bioshock series. The game\'s concept was developed by Irrational\'s creative lead, Ken Levine, and incorporates ideas by 20th century dystopian and utopian thinkers such as Ayn Rand, George Orwell, and Aldous Huxley, as well as historical figures such as John D.',
    price: 10,
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    title: 'The Witcher 3: Wild Hunt',
    description: 'The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt and based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings, played in an open world with a third-person perspective.',
    price: 30,
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png',
    title: 'Metal Gear Solid V: The Phantom Pain',
    description: 'Metal Gear Solid V: The Phantom Pain is a stealth game developed by Kojima Productions and published by Konami. It was released worldwide for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 and Xbox One on September 1, 2015.',
    price: 25,
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Shovel_knight_cover.jpg',
    title: 'Shovel Knight',
    description: 'Shovel Knight is a 2D side-scrolling platform game developed and published by Yacht Club Games. Following a successful Kickstarter crowdfunding campaign, the game was released for Microsoft Windows, Nintendo 3DS and Wii U in June 2014.',
    price: 15,
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Ori_and_the_Blind_Forest_Logo.jpg',
    title: 'Ori and the Blind Forest',
    description: 'Ori and the Blind Forest is a platform-adventure Metroidvania video game developed by Moon Studios and published by Microsoft Studios. The game was released for Xbox One and Microsoft Windows on March 11, 2015 and was released for Nintendo Switch on September 27, 2019.',
    price: 15,
  }),
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/28/Doom_Cover.jpg',
    title: 'Doom',
    description: 'Doom is a first-person shooter video game developed by id Software and published by Bethesda Softworks. It was released worldwide on Microsoft Windows, PlayStation 4, and Xbox One in May 2016 and is powered by id Tech 6. A port for Nintendo Switch was co-developed with Panic Button and released in November 2017. A reboot of the Doom franchise, it is the fourth title in the main series and the first major installment since Doom 3 in 2004.',
    price: 20,
  }),
];

// Save products to database
let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      disconnectDB();
    }
  });
};

// const saveProducts = async () => {
//   products.map(async (p) => {
//     try {
//       await p.save();
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

// saveProducts();

// disconnect database
const disconnectDB = () => {
  try {
    mongoose.disconnect();
    console.log('MongoDB disconnected - mongodb://127.0.0.1:27017/shopping-cart');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const sequelize = require("../config/connection");
const { Post, Comment } = require("../models");

const postSeedData =  require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Post.bulkCreate(postSeedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

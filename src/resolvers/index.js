const { postsQuery } = require("./posts");
const { usersQuery } = require("./users");

module.exports = {
  Query: {
    ...postsQuery,
    ...usersQuery
  }
};

exports.postsQuery = {
  posts: async (_source, _args, { dataSources }) => {
    return dataSources.postsApi.getPosts();
  }
};

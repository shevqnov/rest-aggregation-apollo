exports.usersQuery = {
  users: async (_, { page }, { dataSources }) => {
    const { data: users, ...meta } = await dataSources.usersApi.getUsers(page);
    return {
      data: users.map(user => ({ ...user, lastName: user.last_name, firstName: user.first_name })),
      meta: { ...meta, perPage: meta.per_page }
    };
  }
};

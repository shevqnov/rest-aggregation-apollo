const { RESTDataSource } = require("apollo-datasource-rest");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://reqres.in/api";
  }

  async getUsers(page = 1) {
    return this.get(`/users?page=${page}`);
  }
}

module.exports = new UsersApi();

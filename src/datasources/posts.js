const { RESTDataSource } = require("apollo-datasource-rest");

class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jsonplaceholder.typicode.com";
  }

  async getPosts() {
    return this.get(`/posts`);
  }

  async getPostById(id = 1) {
    const data = await this.get(`/posts/${id}`);
    return data;
  }
}

module.exports = new PostsApi();

const fs = require("fs");

class Post {
  constructor(id, owner, title, content, created_at, tags) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.content = content;
    this.created_at = created_at;
    this.tags = tags;
  }

  static list() {}
}

module.exports = Post;

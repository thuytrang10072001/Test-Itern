class Comment {
  constructor(id, owner, post, content, created_at) {
    this.id = id;
    this.post = post;
    this.owner = owner;
    this.content = content;
    this.created_at = created_at;
  }
}

module.exports = Comment;

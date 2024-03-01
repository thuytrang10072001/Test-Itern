const PostRoute = require("./PostRoute");
const UserRoute = require("./UserRoute");
const CommentRoute = require("./CommentRoute");

function routes(app) {
  app.use("/posts", PostRoute);
  app.use("/users", UserRoute);
  app.use("/comments", CommentRoute);
}

module.exports = routes;

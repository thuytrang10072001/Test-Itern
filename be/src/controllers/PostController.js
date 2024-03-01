const json = require("../components/json");
const fs = require("fs");

// dotenv.config();
const Post = require("../models/Post");

class PostController {
  getList = async (req, res) => {
    try {
      fs.readFile("../data/posts.json", "utf8", (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const posts = JSON.parse(data);
          if (posts.length == 0) {
            return res.send(json([], true, ""));
          } else {
            return res.send(json(posts, true, ""));
          }
        }
      });
    } catch (e) {
      console.log(e);
      return res.send(json(e, false, "Get data fail!"));
    }
  };

  getCmt = async (req, res) => {
    const post = req.params.id;
    try {
      fs.readFile("../data/comments.json", "utf8", (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const cmt = JSON.parse(data);
          cmt.forEach((db) => {
            if (`${db.post}` == post) {
              return res.send(json(db, true, ""));
            }
          });
        }
      });
      //   return res.send(json([], true, "User not exist!"));
    } catch (e) {
      console.log(e);
      return res.send(json(e, false, "Get data fail!"));
    }
  };
}
module.exports = new PostController();

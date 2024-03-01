const json = require("../components/json");
const fs = require("fs");

// dotenv.config();
const Comment = require("../models/Comment");

class CommentController {
  getCmt = async (req, res) => {
    const post = req.params.id;
    try {
      fs.readFile("../data/comments.json", "utf8", (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const cmt = JSON.parse(data);
          const rs = [];
          cmt.forEach((db) => {
            if (`${db.post}` == post) {
              rs.push(db);
            }
          });
          return res.send(json(rs, true, ""));
        }
      });
    } catch (e) {
      console.log(e);
      return res.send(json(e, false, "Get data fail!"));
    }
  };
}
module.exports = new CommentController();

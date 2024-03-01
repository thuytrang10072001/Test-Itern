const json = require("../components/json");
const fs = require("fs");

// dotenv.config();
const Post = require("../models/Post");

class UserController {
  getUser = async (req, res) => {
    const id = req.params.id;
    try {
      fs.readFile("../data/users.json", "utf8", (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const users = JSON.parse(data);
          users.forEach((db) => {
            if (`${db.id}` == id) {
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

  getList = async (req, res) => {
    try {
      fs.readFile("../data/users.json", "utf8", (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const users = JSON.parse(data);
          if (users.length == 0) {
            return res.send(json([], true, ""));
          } else {
            return res.send(json(users, true, ""));
          }
        }
      });
    } catch (e) {
      console.log(e);
      return res.send(json(e, false, "Get data fail!"));
    }
  };
}
module.exports = new UserController();

import React, { useEffect, useState } from "react";
// import { Form, FormGroup, Input } from "reactstrap";

import cmt from "../assets/cmt.jpg";
import "../style/style.css";
import Comment from "./comment";
import { getComment, getUser } from "../utils/services";

const Post = (props) => {
  const [color, setColor] = useState("#000");
  const [cmt, setCmt] = useState([]);
  const [user, setUser] = useState([]);
  const [check, setCheck] = useState(false);

  const getCmt = async (id) => {
    const rs = await getComment(id);
    setCmt([]);
    setUser([]);
    if (!rs.status) {
      return;
    } else {
      setCmt(rs.data);
      for (let i = 0; i < rs.data.length; i++) {
        getAuthor(rs.data[i].owner);
      }
      console.log(user);
      return rs.data;
    }
  };

  const getAuthor = async (id) => {
    const rs = await getUser(id);
    if (!rs.status) {
      return;
    } else {
      user.push(rs.data[0]);
      return rs.data;
    }
  };
  return (
    <div className="item">
      <div className="title" style={{ color: color }}>
        {props.item.title}
      </div>
      <div className="item-start">
        <div className="author" style={{ color: color }}>
          <text>Author: {props.user[0].name}</text>
          <br />
          <text>Created at: {props.item.created_at}</text>
        </div>
        <div className="color">
          <button
            className="btn-color"
            onClick={() => setColor("#E47AB1")}
            style={{
              color: "#E47AB1",
              borderColor: "#E47AB1",
              borderRadius: "5px",
              backgroundColor: "#FDF2F6",
            }}
          >
            magenta
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#EC7E7A")}
            style={{
              color: "#EC7E7A",
              borderColor: "#EC7E7A",
              borderRadius: "5px",
              backgroundColor: "#FDF2F1",
            }}
          >
            red
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#F09677")}
            style={{
              color: "#F09677",
              borderColor: "#F09677",
              borderRadius: "5px",
              backgroundColor: "#FDF2E9",
            }}
          >
            volcano
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#F1AF71")}
            style={{
              color: "#F1AF71",
              borderColor: "#F1AF71",
              borderRadius: "5px",
              backgroundColor: "#FEF7E8",
            }}
          >
            orange
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#F1BB5C")}
            style={{
              color: "#F1BB5C",
              borderColor: "#F1BB5C",
              borderRadius: "5px",
              backgroundColor: "#FFFBE8",
            }}
          >
            gold
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#CCE589")}
            style={{
              color: "#CCE589",
              borderColor: "#CCE589",
              borderRadius: "5px",
              backgroundColor: "#FEFFE9",
            }}
          >
            lime
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#BEE3A4")}
            style={{
              color: "#BEE3A4",
              borderColor: "#BEE3A4",
              borderRadius: "5px",
              backgroundColor: "#F8FFF0",
            }}
          >
            green
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#A2DFDD")}
            style={{
              color: "#A2DFDD",
              borderColor: "#A2DFDD",
              borderRadius: "5px",
              backgroundColor: "#EBFFFB",
            }}
          >
            cyan
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#74B0F8")}
            style={{
              color: "#74B0F8",
              borderColor: "#74B0F8",
              borderRadius: "5px",
              backgroundColor: "#E9F7FE",
            }}
          >
            blue
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#8A9FEF")}
            style={{
              color: "#8A9FEF",
              borderColor: "#8A9FEF",
              borderRadius: "5px",
              backgroundColor: "#F1F5FE",
            }}
          >
            geekblue
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#CEBBEE")}
            style={{
              color: "#CEBBEE",
              borderColor: "#CEBBEE",
              borderRadius: "5px",
              backgroundColor: "#F8F2FE",
            }}
          >
            purple
          </button>
          <button
            className="btn-color"
            onClick={() => setColor("#000")}
            style={{
              color: "#000",
              borderColor: "#000",
              borderRadius: "5px",
              backgroundColor: "#ddd",
            }}
          >
            black
          </button>
        </div>
      </div>
      <div className="item-content" style={{ color: color }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
        nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet auis
      </div>
      <text onClick={() => getCmt(props.item.id)}>{cmt.length} replies</text>
      {cmt?.map((item, index) => (
        <Comment item={item} user={user} />
      ))}{" "}
    </div>
  );
};

export default Post;

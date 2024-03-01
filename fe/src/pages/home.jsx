import React, { useEffect, useState } from "react";
// import { Form, FormGroup, Input } from "reactstrap";
import { WindowsFilled } from "@ant-design/icons";

import Post from "../components/post";
import logo from "../assets/avatar.jpg";
import "../style/style.css";
import { listPost, getComment, getUser, listUser } from "../utils/services";

const Home = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);

  const getList = async () => {
    const rs = await listPost();
    if (!rs.status) {
      return;
    } else {
      setList(rs.data);
      for (let i = 0; i < rs.data.length; i++) {
        // getAuthor(rs.data[i].owner, i);
      }
      return;
    }
  };

  const getListUser = async () => {
    const rs = await listUser();
    if (!rs.status) {
      return;
    } else {
      setUser(rs.data);
    }
  };

  // const getAuthor = async (id, index) => {
  //   const rs = await getUser(id);
  //   if (!rs.status) {
  //     return;
  //   } else {
  //     user.push(rs.data[0]);
  //     return rs.data;
  //   }
  // };

  useEffect(() => {
    getList();
    getListUser();
  }, []);

  return (
    <div>
      <div className="header">
        <div className="header-start">
          {" "}
          <WindowsFilled className="icon" />
          <text>Logo</text>
        </div>
        <div className="blog">Blogs</div>
        <div className="header-end">
          <div className="avatar">
            <img src={logo} alt=""></img>{" "}
          </div>
          <text>Adam Levine</text>
        </div>
      </div>
      {list?.map((item, index) => (
        <Post item={item} user={user} />
      ))}
    </div>
  );
};

export default Home;

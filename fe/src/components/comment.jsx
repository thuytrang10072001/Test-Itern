import React, { useEffect, useState } from "react";
// import { Form, FormGroup, Input } from "reactstrap";

import cmt from "../assets/cmt.jpg";
import "../style/style.css";

const Comment = (props) => {
  return (
    <div>
      <br />
      <div className="cmt-item">
        <div className="cmt-avatar">
          <img src={cmt} alt=""></img>
        </div>
        <div className="cmt-content">
          <text>{props.user}</text>
          <br />
          <text
            onClick={() => console.log(props.user)}
            style={{ fontSize: "16px", fontWeight: "500" }}
          >
            {props.item.content}
          </text>
        </div>
      </div>
    </div>
  );
};

export default Comment;

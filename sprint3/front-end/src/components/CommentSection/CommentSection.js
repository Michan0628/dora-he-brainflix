import React from "react";
import {
  withRouter
} from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import Avatar from "../Avatar/Avatar";
import "./style.scss";

function dateFormat(timestamp) {
  const dateObject = new Date(timestamp);
  const date =
    dateObject.getMonth() +
    1 +
    "/" +
    dateObject.getDate() +
    "/" +
    dateObject.getFullYear();
  return date;
}

function CommentSection(props) {
  
  let commentToRender;
  if (props.comments) {
    commentToRender = props.comments.map((item) => {
      return (
        <CommentCard
          name={item.name}
          date={dateFormat(item.timestamp)}
          txt={item.comment}
          key={item.id}
        />
      );
    });
  }
  return (
    <section className="commentSection">
      <h2 className="commentSection__title">3 Comments</h2>
      <section className="commentSection__formSection">
        <Avatar className="commentSection__avatar" />
        <CommentForm className="commentSection__form" />
      </section>

      <section className="commentCards">
        {commentToRender}
      </section>
    </section>
  );
}

export default withRouter(CommentSection)
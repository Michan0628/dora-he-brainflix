import React, { Component } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentCardList from "../CommentCardList/CommentCardList";
import Avatar from "../Avatar/Avatar";
import "./CommentSection.scss";

export default class CommentSection extends Component {
  render() {
    return (
      <section className="commentSection">
        <h2 className="commentSection__title">3 Comments</h2>
        <section className="commentSection__formSection">
          <Avatar className="commentSection__avatar" />
          <CommentForm className="commentSection__form" />
        </section>
        <CommentCardList />
      </section>
    );
  }
}

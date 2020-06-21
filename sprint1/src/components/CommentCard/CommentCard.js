import React from "react";
import Avatar from "../Avatar/Avatar";
import "./style.scss";

export default function CommentCard(props) {
  return (
    <section className="commentCard">
      <Avatar className="commentCard__avatar" />
      {/* CARD BODY */}
      <section className="commentCard__body">
        <section className="commentCard__info">
          <p className="commentCard__name">{props.name}</p>
          <p className="commentCard__date">{props.date}</p>
        </section>
        <p className="commentCard__text">{props.txt}</p>
      </section>
    </section>
  );
}

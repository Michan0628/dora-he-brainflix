import React from "react";
import Button from "../Button/Button";
import "./style.scss";

export default function CommentForm(props) {
  return (
    <form
      action="#"
      className={props.className + " commentSection__form"}
      name="userForm"
      method="POST"
    >
      <label htmlFor="userComment" className="commentSection__form-label">
        JOIN THE CONVERSATION
      </label>
      <textarea
        name="userComment"
        id="userComment"
        placeholder="Write comment here"
        className="userComment commentSection__form-input"
      ></textarea>
      <Button className="commentSection__form-submit" text="COMMENT" />
    </form>
  );
}

import React, { Component } from "react";

import CommentList from '../CommentList/CommentList'

export default class CommentSection extends Component {

  render() {
    
    return (
      <div>
        <section className="commentSection comment">
          <h2 className="comment__title">3 Comments</h2>
          {/* COMMENT FORM */}
          <figure className="form__avatar">{/* USER PROFILE */}</figure>
          <section className="formSection">
            <form
              action="#"
              className="comment__form form"
              name="userForm"
              method="POST"
            >
              <h3 className="form__label">JOIN THE CONVERSATION</h3>
              <textarea
                name="userComment"
                id="userComment"
                placeholder="Write comment here"
                className="form__input"
              ></textarea>
              <button type="submit" className="form__submit">
                COMMENT
              </button>
            </form>
          </section>
          {/* COMMENT DISPLAY */}
          <section className="commentCards">
            <section className="commentCard">
              <figure className="commentCard__avatar">{/* AVATAR */}</figure>
              <section className="commentCard__body">
                <section className="commentCard__info">
                  <p className="commentCard__name">Theodore</p>
                  <p className="commentCard__time">7/4/2018</p>
                </section>
                <p className="commentCard__text">
                  How can someone be so good!!! You can tell he lives for this
                  and loves to do it every day. Everytime I see him I feel
                  instantly happy! He’s definitely my favorite ever!
                </p>
              </section>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

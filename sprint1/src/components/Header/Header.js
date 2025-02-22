import React, { Component } from "react";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import "./style.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="./assets/Logo/Logo-brainflix.svg"
            alt="This is the logo of Brainflix"
            className="header__logo"
          />
        </div>
        <div className="header__right">
          <form className="header__form">
            <input
              type="text"
              placeholder="Search"
              className="header__search"
              name="search"
            />
          </form>
          <Button text="UPLOAD" className="header__button" />
          <Avatar className="header__avatar" />
        </div>
      </div>
    );
  }
}

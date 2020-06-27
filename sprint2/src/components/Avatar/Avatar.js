import React from "react";
import "./style.scss";
import avatarImg from '../../assets/Mohan-muruge.jpg'
export default function Avatar(props) {
  return (
    <figure className={props.className + " avatar"}>
      <img src={avatarImg} alt="user's avatar image"/>
    </figure>
  );
}

import React from "react";
import "./style.scss";

export default function VideoButtons() {
  return (
    <div className="videoButtons">
      <div className="playButton"></div>
      <div className="videoButtons__right">
        <div className="fullScreen"></div>
        <div className="volume"></div>
      </div>
    </div>
  );
}

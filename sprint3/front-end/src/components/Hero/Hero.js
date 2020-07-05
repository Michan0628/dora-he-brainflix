import React from "react";
import VideoButtons from "../VideoButtons/VideoButtons";
import "./style.scss";


export default function Hero(props) {
  return (
    <div>

        <video
          // controls
          className="hero"
          poster={props.image}
          src={props.video}
        >
          <source type="video/mp4" />
        </video>
        <VideoButtons />

      </div>
  )
}

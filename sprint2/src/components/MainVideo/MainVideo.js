import React, { Component } from "react";
import VideoButtons from "../VideoButtons/VideoButtons";

export default class MainVideo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="videoPage__mainVideo">
        <video
          className="hero"
          poster={this.props.image}
        >
          <source type="video/mp4" />
        </video>
        <VideoButtons />
      </div>
    );
  }
}

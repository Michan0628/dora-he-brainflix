import React, { Component } from "react";
import VideoButtons from "../VideoButtons/VideoButtons";
import './style.scss'

export default class MainVideo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainVideoSection videoPage__mainVideo">
        <video
          controls
          className="mainVideoSection__video"
          poster={this.props.image}
          src={this.props.src}
        >
          <source type="video/mp4" />
        </video>
        <VideoButtons />
      </div>
    );
  }
}

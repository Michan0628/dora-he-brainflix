import React, { Component } from "react";
import axios from "axios";
import "./style.scss";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
    };
  }

  componentDidMount() {
    axios.get("./data.json").then((res) => {
      this.setState({ video: res.data.mainVideo });
    });
  }

  render() {
    return (

      <video controls className='hero' poster={this.state.video.image} src={this.state.video.video}>
        <source type='video/mp4' />
      </video>

    );
  }
}

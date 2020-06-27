import React, { Component } from "react";
import Hero from "../Hero/Hero";
import Main from "../Main/Main";
import axios from "axios";

const API_KEY = "?api_key=851fad5d-3ca8-4837-aed1-2384b3fba526";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideo: [],
      sideVideo: [],
    };
  }
  componentDidMount() {
    this.getMainVideo();
    this.getSideVideo();
  }

  getMainVideo = () => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu${API_KEY}`)
      .then((res) => {
        this.setState({ mainVideo: res.data });
      })
      .catch((error) => {
        console.log("mainVideo Axios error");
      });
  };

  getSideVideo = () => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos${API_KEY}`)
      .then((res) => {
        this.setState({ sideVideo: res.data });
      })
      .catch((error) => {
        console.log("sideVideo Axios error");
      });
  };

  render() {
    return (
      <div>
        <Hero
          video={(this.state.mainVideo.video, API_KEY)}
          image={this.state.mainVideo.image}
        />
        <Main
          title={this.state.mainVideo.title}
          channel={this.state.mainVideo.channel}
          timestamp={this.state.mainVideo.timestamp}
          views={this.state.mainVideo.views}
          likes={this.state.mainVideo.likes}
          description={this.state.mainVideo.description}
          comment={this.state.mainVideo.comments}
          videoList={this.state.sideVideo}
        />
      </div>
    );
  }
}

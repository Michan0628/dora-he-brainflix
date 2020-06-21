import React, { Component } from "react";
import axios from "axios";
import VideoCard from "../VideoCard/VideoCard";

export default class VideoCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
    };
  }

  componentDidMount() {
    axios.get("./data.json").then((res) => {
      this.setState({ sideVideos: res.data.sideVideos });
    });
  }

  render() {
    return (
      <section className="playlistCards">
        {this.state.sideVideos.map((item) => (
          <VideoCard
            src={item.image}
            channel={item.channel}
            title={item.title}
            key={item.id}
          />
        ))}
      </section>
    );
  }
}

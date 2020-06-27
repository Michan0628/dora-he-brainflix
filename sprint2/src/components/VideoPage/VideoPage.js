import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import PlaylistSection from "../PlaylistSection/PlaylistSection";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import MainVideo from "../MainVideo/MainVideo";
import axios from "axios";


const API_KEY = "?api_key=851fad5d-3ca8-4837-aed1-2384b3fba526";

export default class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideo: {},
      sideVideo: [],
    };
  }
  componentDidMount() {
      console.log('this is did mount',this.props)
    this.getMainVideo('1af0jruup5gu')
    this.getSideVideo();
  }

  componentDidUpdate(prevState, prevProps) {
      if(this.state.mainVideo.id!== this.props.match.params.id){
        this.getMainVideo(this.props.match.params.id);
      }
      console.log("this is did update prevProps",prevProps)
      console.log("this is did update prevState",prevState)
    // prevState!== current stat(param)
    // axios get new param(id) setstate to mainvideo
  }
  getMainVideo = (videoId) => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${videoId}${API_KEY}`)
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
      <div className="videoPage">
        <MainVideo
        //   video={(this.state.mainVideo.video, API_KEY)}
          image={this.state.mainVideo.image}
        />
        <DescriptionCard mainVideo={this.state.mainVideo} />
        <CommentSection comments={this.state.mainVideo.comments} />
        <PlaylistSection sideVideo={this.state.sideVideo} />
      </div>
    );
  }
}

import React, { Component } from "react";
import VideoCardList from '../VideoCardList/VideoCardList'
import './style.scss';

export default class Playlist extends Component {
  render() {
    return (
      <section className="playlistSection playlist">
        <h3 className="playlist__title">NEXT VIDEO</h3>
        <VideoCardList/>
      </section>
    );
  }
}

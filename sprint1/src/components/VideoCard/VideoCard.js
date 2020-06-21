import React, { Component } from "react";
import './style.scss';

export default class VideoCard extends Component {
  render() {
    return (
      <section className="playlistCard">
        {/* <figure className="playlistCard__thumbnail">
          <img src="./assets/Images/video-list-1.jpg" alt="This is thumbnail of video" className='playlistCard__thumbnail-photo'/>

        </figure> */}
        <img src="./assets/Images/video-list-1.jpg" alt="This is thumbnail of video" className='playlistCard__thumbnail'/>
        <section className="playlistCard__body">
          <p className="playlistCard__title">Become A Travel Pro In One Easy Lesson easy easy easy</p>
          <p className="playlistCard__channel">Todd Welch</p>
        </section>
      </section>
    );
  }
}

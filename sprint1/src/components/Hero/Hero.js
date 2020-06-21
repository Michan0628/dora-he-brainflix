import React, { Component } from "react";
import './style.scss'


export default class Hero extends Component {
  render() {
    return (
        <video controls className='hero'>
          <source src='./assets/Video/BrainStationSampleVideo.mp4' type='video/mp4' className='hero__video'/>
        </video>
    );
  }
}

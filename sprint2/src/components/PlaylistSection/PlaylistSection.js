import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./style.scss";


export default function PlaylistSection(props) {
  
  function filterMain(item ){
    return item.id !== props.mainVideoId;
  }
  
  if(props.mainVideoId){
    console.log('get the main video id',props.mainVideoId)
  }

  let videoToRender;
  if (props.sideVideo) {
    let filterVideo = props.sideVideo.filter(filterMain)
    videoToRender = filterVideo.map((item) => {
      return (
        <Link key={item.id} to={`/videos/${item.id}`}>
          <VideoCard
          key={item.id} 
            src={item.image}
            channel={item.channel}
            title={item.title}
          />
        </Link>
      );
    });
  }
  return (
    <section className="playlistSection playlist">
      <h3 className="playlist__title">NEXT VIDEO</h3>

      <section className="playlist__cards playlistCards">
        {videoToRender}
      </section>
    </section>
  );
}

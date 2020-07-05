import React from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import CommentSection from "../CommentSection/CommentSection";
import PlaylistSection from "../PlaylistSection/PlaylistSection";
import "./style.scss";


export default function Main(props) {
  return (
    <main className="mainContent">
      <div className="mainContent__devider">
        <DescriptionCard
          title={props.title}
          channel={props.channel}
          timestamp={props.timestamp}
          views={props.views}
          likes={props.likes}
          description={props.description}
        />
        <CommentSection comment={props.comment} />
      </div>

      <PlaylistSection videoList={props.videoList} />
    </main>
  );
}

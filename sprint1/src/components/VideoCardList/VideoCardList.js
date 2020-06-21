import React from "react";
import VideoCard from '../VideoCard/VideoCard'

export default function VideoCardList() {
  return (
    <section className="playlistCards">
      <VideoCard />
      <VideoCard />
    </section>
  );
}

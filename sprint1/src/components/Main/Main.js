import React, { Component } from "react";
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import CommentSection from '../CommentSection/CommentSection'
import Playlist from '../Playlist/Playlist'

export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <DescriptionCard />

          <CommentSection />

          <Playlist />
        </main>
      </div>
    );
  }
}

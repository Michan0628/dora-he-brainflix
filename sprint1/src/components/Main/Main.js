import React, { Component } from "react";
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import CommentSection from '../CommentSection/CommentSection'
import PlaylistSection from '../PlaylistSection/PlaylistSection'

export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <DescriptionCard />

          <CommentSection />

          <PlaylistSection />
        </main>
      </div>
    );
  }
}

import React, { Component } from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import CommentSection from "../CommentSection/CommentSection";
import PlaylistSection from "../PlaylistSection/PlaylistSection";
import "./style.scss";

export default class Main extends Component {
  render() {
    return (

        <main className="main">
          <div className="main__devider">
            <DescriptionCard />
            <CommentSection />
          </div>

          <PlaylistSection />
        </main>
    );
  }
}

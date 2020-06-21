import React, { Component } from "react";
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import CommentSection from '../CommentSection/CommentSection'
import PlaylistSection from '../PlaylistSection/PlaylistSection'
import './style.scss'

export default class Main extends Component {
  render() {
    return (
      <div>
        <main className='main'>
          <div className="main__grid1">
          <DescriptionCard />
          <CommentSection />
          </div>
          {/* <div className="main__grid2"> */}
          <PlaylistSection />
          {/* </div> */}
        </main>
      </div>
    );
  }
}

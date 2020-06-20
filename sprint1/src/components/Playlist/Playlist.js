import React, { Component } from "react";
import data from '../../data'




export default class Playlist extends Component {
  render() {
    return (
      <section className="playlistSection playlist">
        <h3 className="playlist__title">NEXT VIDEO</h3>
        <section className="playlistCards">
          <section className="playlistCard">
            <figure className="playlistCard__thumbnail">
              {/* THUMBNAIL */}
            </figure>
            <section className="playlistCard__boday">
              <p className="playlistCard__title">Become A Travel Pro</p>
              <p className="playlistCard__author">Todd Welch</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

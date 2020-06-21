import React from 'react'
import './style.scss';

export default function VideoCard(props) {
  return (
    <section className="playlistCard">
      <img src={props.src} alt="This is thumbnail of video" className='playlistCard__thumbnail'/>
      <section className="playlistCard__body">
        <p className="playlistCard__title">{props.title}</p>
        <p className="playlistCard__channel">{props.channel}</p>
      </section>
    </section>
  )
}

// {
//   "id": 9,
//   "title": "BMX Rampage: 2018 Highlights",
//   "channel": "Red Cow",
//   "image": "./assets/Images/video-list-0.jpg"
// }

import React, {Component} from "react";
import Button from '../Button/Button';
import './style.scss';
import axios from 'axios';

export default class UploadForm extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    const videoTitle = event.target.videoTitle.value;
    const videoDescription = event.target.videoDescription.value;
    axios.post('http://localhost:8080/videos',{
      title: videoTitle,
      description: videoDescription,
      image:'https://i.imgur.com/5qyCZrD.jpg'
    })
    .then(res=>{
      console.log(res.data)
    })
    
  };

  render() {
    return (
      <>
      <div className='uploadSection'>
      <h1 className="uploadSection__title">Upload Video</h1>

      <form onSubmit={this.handleSubmit} className="uploadForm" action="post">
       
        <section className="uploadForm__group uploadForm__group1">
          <label className="uploadForm__label">VIDEO THUMBNAIL</label>
          <figure className="uploadForm__thumbnail">
            <img src="./assets/Images/Upload-video-preview.jpg" alt="This is thumbnail image" className='uploadForm__thumbnail-img'/>
          </figure>
        </section>

        <section className='uploadForm__segment'>
        <section className="uploadForm__group uploadForm__group2">
          <label className="uploadForm__label">TITLE YOUR VIDEO</label>
          <input
            type="text"
            className="uploadForm__input"
            name="videoTitle"
            placeholder="Add a title to your video"
          />
        </section>

        <section className="uploadForm__group uploadForm__group3">
          <label className="uploadForm__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            name="videoDescription"
            id="videoDescription"
            placeholder="Add a description of your video"
            className="uploadForm__txtArea"
          ></textarea>
        </section>
        </section>

        <section className="uploadForm__buttons">
        <button type='submit' className='uploadForm__publish'>PUBLISH</button>
        <Button link='/' text='CANCEL' className='uploadForm__cancel' />
        </section>

      </form>
      </div>

    </>
    )
  }
}

import React from "react";
import Button from '../Button/Button';
import './style.scss';

export default function Upload() {
  return (
    <>
      <div className='uploadSection'>
      <h1 className="uploadSection__title">Upload Video</h1>

      <form className="uploadForm" action="post">
        <section className="uploadForm__group">
          <label className="uploadForm__label">VIDEO THUMBNAIL</label>
          <figure className="uploadForm__thumbnail">
            <img src="./assets/Images/Upload-video-preview.jpg" alt="This is thumbnail image" className='uploadForm__thumbnail-img'/>
          </figure>
        </section>

        <section className="uploadForm__group">
          <label className="uploadForm__label">TITLE YOUR VIDEO</label>
          <input
            type="text"
            className="uploadForm__input"
            name="videoTitle"
            placeholder="Add a title to your video"
          />
        </section>

        <section className="uploadForm__group">
          <label className="uploadForm__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            name="videoDescription"
            id="videoDescription"
            placeholder="Add a description of your video"
            className="uploadForm__txtArea"
          ></textarea>
        </section>

        {/* <button type="submit" value="Submit" >
          Publish
        </button>
        <button type="reset" value="Reset">
          Cancel
        </button> */}
        <section className="uploadForm__buttons">
        <Button text='PUBLISH' className='uploadForm__publish' />
        <Button link='/' text='CANCEL' className='uploadForm__cancel' />
        </section>

      </form>
      </div>

    </>
  );
}

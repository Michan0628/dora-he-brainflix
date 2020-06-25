import React from "react";
import Header from "../Header/Header";

export default function Upload() {
  return (
    <div>
      <Header />
      <h1 className='upload__title'>Upload Video</h1>
      
      <form className='upload__form form' action="post">

      <label className='form__label'>VIDEO THUMBNAIL</label>
      <img className='upload__thumbnail-img' src="" alt=""/>

      <label className='form__label'>TITLE YOUR VIDEO</label>
      <input type="text" className='form__input' name='videoTitle' placeholder='Add a title to your video'/> 

      <label className='form__label'>ADD A VIDEO DESCRIPTION</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button type='submit' value='Submit'>
        Publish
      </button>
      <button type='reset' value='Reset'>
        Cancel
      </button>
      </form>
      
    </div>
  );
}

import React from 'react';
import Button from '../Button/Button';
import './style.scss';

export default function CommentForm(props) {
    return (
            <form
              action="#"
              className={props.className+' form'}
              name="userForm"
              method="POST"
            >
              <label htmlFor="userComment" className='form__label'>JOIN THE CONVERSATION</label>
              <textarea
                name="userComment"
                id="userComment"
                placeholder="Write comment here"
                className="userComment form__input"
              ></textarea>
              <Button className='form__submit' text='COMMENT'/>
            </form>
    )
}

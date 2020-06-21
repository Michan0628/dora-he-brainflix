import React from 'react'
import './HeaderRight.scss'
import Button from '../Button/Button'

export default function HeaderRight() {
    return (
        <div className='header__right'>
        <form>
            <input type="text" placeholder='Search' className='header__search' name='search'/>
        </form>
       <Button text='UPLOAD'className='Header__button'/>
        <figure className="header__user"></figure>

        </div>
    )
}


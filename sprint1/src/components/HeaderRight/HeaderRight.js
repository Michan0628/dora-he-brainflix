import React from 'react'
import './HeaderRight.scss'
export default function HeaderRight() {
    return (
        <div>
        <form>
            <input type="text" placeholder='Search' class='header__search' name='search'/>
        </form>
        <button className='header__upload'>UPLOAD</button>
        <figure className="header__user"><img src="./assets/Images/Mohan-muruge.jpg" alt=""/></figure>

        </div>
    )
}


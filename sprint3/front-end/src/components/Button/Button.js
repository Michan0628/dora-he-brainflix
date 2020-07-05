import React from 'react'
import './style.scss'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Button(props) {

    return (
        <Link to={props.link} className={props.className}>
        <button>
            {props.text}
        </button>

        </Link>
    )
}

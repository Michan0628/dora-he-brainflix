import React, { Component } from 'react'
import HeaderLeft from '../HeaderLeft/HeaderLeft'
import HeaderRight from '../HeaderRight/HeaderRight'

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderLeft/>
                <HeaderRight/>
            </div>
        )
    }
}

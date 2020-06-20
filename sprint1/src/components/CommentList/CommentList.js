import React, { Component } from 'react'
import axios from 'axios'

export default class CommentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[]
        }
    }
    componentDidMount(){
        axios.get('./data.json')
        .then(res => {
            console.log(res.data.mainVideo.comments)
            this.setState({comments: res.data.mainVideo.comments})
        })
    }
    render() {
        return (
            <ul>
                {this.state.comments.map(item => <li>{item.comment}</li>)}
            </ul>
        )
    }
}

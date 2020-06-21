import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '../Avatar/Avatar';
import './style.scss'

export default class CommentCard extends Component {

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
            <section className="commentCard">
              <Avatar className='commentCard__avatar'/>
              {/* <figure className="commentCard__avatar">AVATAR</figure> */}
              <section className="commentCard__body">
                <section className="commentCard__info">
                  <p className="commentCard__name">Theodore</p>
                  <p className="commentCard__date">7/4/2018</p>
                </section>
                <p className="commentCard__text">
                  How can someone be so good!!! You can tell he lives for this
                  and loves to do it every day. Everytime I see him I feel
                  instantly happy! He’s definitely my favorite ever!
                </p>
              </section>
            </section>
        )
    }
}

// constructor(props){
//     super(props);
//     this.state = {
//         comments:[]
//     }
// }
// componentDidMount(){
//     axios.get('./data.json')
//     .then(res => {
//         console.log(res.data.mainVideo.comments)
//         this.setState({comments: res.data.mainVideo.comments})
//     })
// }
// render() {
//     return (
//         <ul>
//             {this.state.comments.map(item => <li>{item.comment}</li>)}
//         </ul>
//     )
// }

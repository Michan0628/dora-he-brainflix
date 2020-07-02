import React, { Component } from "react";
import axios from "axios";
import CommentCard from "../CommentCard/CommentCard";


// import React from 'react'

// export default function CommentCardList(props) {
//   return (
//     <section className="commentCards">
//       {this.state.comments.map((item) => (
//         <CommentCard
//           name={item.name}
//           date={this.dateFormat(item.timestamp)}
//           txt={item.comment}
//           key={item.id}
//         />
//       ))}
//     </section>
//   );
// }

//   dateFormat = (timestamp) => {
//     const dateObject = new Date(timestamp);
//     const date =
//       dateObject.getMonth() +
//       1 +
//       "/" +
//       dateObject.getDate() +
//       "/" +
//       dateObject.getFullYear();
//     return date;
//   };
//   render() {
    
//   }
// }

export default class CommentCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    axios.get("./data.json").then((res) => {
      this.setState({ comments: res.data.mainVideo.comments });
    });
  }

  dateFormat = (timestamp) => {
    const dateObject = new Date(timestamp);
    const date =
      dateObject.getMonth() +
      1 +
      "/" +
      dateObject.getDate() +
      "/" +
      dateObject.getFullYear();
    return date;
  };
  render() {
    return (
      <section className="commentCards">
        {this.state.comments.map((item) => (
          <CommentCard
            name={item.name}
            date={this.dateFormat(item.timestamp)}
            txt={item.comment}
            key={item.id}
          />
        ))}
      </section>
    );
  }
}

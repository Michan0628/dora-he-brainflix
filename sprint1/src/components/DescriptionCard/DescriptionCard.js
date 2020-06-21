import React, { Component } from "react";
import "./style.scss";
import axios from 'axios'

export default class DescriptionCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      description: [],
    };
  }
  componentDidMount() {
    axios.get("./data.json").then((res) => {
      this.setState({ description: res.data.mainVideo});
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

        <section className="videoSection">
          <section className="videoSection__header">
            <h1 className="videoSection__header-title">{this.state.description.title}</h1>
            <section className="videoSection__header-info">
              <section className="videoSection__header-publish">
                <p className="videoSection__channel">{this.state.description.channel}</p>
                <p className="videoSection__time">{this.dateFormat(this.state.description.timestamp)}</p>
              </section>
              <section className="videoSection__stats">
                <section className="videoSection__stats-views">{this.state.description.views}</section>
              
                <section className="videoSection__stats-likes">{this.state.description.likes}</section>
              </section>
            </section>
          </section>
          <section className="videoSection__body">
          {this.state.description.description}
          </section>
        </section>
    );
  }
}
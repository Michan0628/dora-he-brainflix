import React, { Component } from "react";
import "./style.scss";

export default class DescriptionCard extends Component {
  render() {
    return (

        <section className="videoSection">
          <section className="videoSection__header">
            <h1 className="videoSection__header-title">BMX Rampage 2018 Highlights</h1>
            <section className="videoSection__header-info">
              <section className="videoSection__header-publish">
                <p className="videoSection__channel">By Red Cow</p>
                <p className="videoSection__time">12/18/2018</p>
              </section>
              <section className="videoSection__stats">
                <section className="videoSection__stats-views">1001023</section>
              
                <section className="videoSection__stats-likes">1001985</section>
              </section>
            </section>
          </section>
          <section className="videoSection__body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            ad perspiciatis velit, corrupti nemo saepe est in sit, sapiente
            dolor facere voluptatem? Ullam ducimus deleniti, minus quas rerum
            perferendis quo?
          </section>
        </section>
    );
  }
}

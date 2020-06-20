import React, { Component } from 'react'

export default class DescriptionCard extends Component {
    render() {
        return (
            <div>
                 <section className="videoSection">
            <section className="videoSection__header">
              <h1 className="videoSection__header-title">BMX Rampage 2018</h1>
              <section className="videoSection__header-info">
                <section className="videoSection__header-publish">
                  <p className="videoSection__author">By Red</p>
                  <p className="videoSection__time">12/18/2018</p>
                </section>
                <section className="videoSection__views">
                  <section className="videoSection__views-logo"></section>
                  <section className="videoSection__views-number">1001</section>
                </section>
              </section>
            </section>
            <section className="videoSection__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, ad perspiciatis velit, corrupti nemo saepe est in sit,
              sapiente dolor facere voluptatem? Ullam ducimus deleniti, minus
              quas rerum perferendis quo?
            </section>
          </section>
            </div>
        )
    }
}

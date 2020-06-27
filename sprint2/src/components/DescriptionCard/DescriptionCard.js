import React from "react";
import "./style.scss";

function dateFormat(timestamp) {
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

export default function DescriptionCard(props) {
  return (
      <section className="videoSection">
        <section className="videoSection__header">
          <h1 className="videoSection__header-title">
            {props.mainVideo.title}
          </h1>
          <section className="videoSection__header-info">
            <section className="videoSection__header-publish">
              <p className="videoSection__channel">
                {props.mainVideo.channel}
              </p>
              <p className="videoSection__time">
                {dateFormat(props.mainVideo.timestamp)}
              </p>
            </section>
            <section className="videoSection__stats">
              <section className="videoSection__stats-views">
                {props.mainVideo.views}
              </section>

              <section className="videoSection__stats-likes">
                {props.mainVideo.likes}
              </section>
            </section>
          </section>
        </section>
        <section className="videoSection__body">
          {props.mainVideo.description}
        </section>
      </section>
    )
}

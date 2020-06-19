import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <section className="nav-left">
          <section className="logo-img"></section>
        </section>
        <section className="nav-right">
          <input type="text" className="search" />
          <button className="nav-button">UPLOAD</button>
          <section className="userLogin"></section>
        </section>
      </header>
      <section className="hero">
      <video src="" className='hero__video'>{/* VIDEO PLACEHOLDER */}</video>

      </section>
      <main>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          ad perspiciatis velit, corrupti nemo saepe est in sit, sapiente dolor
          facere voluptatem? Ullam ducimus deleniti, minus quas rerum
          perferendis quo?
        </section>
      </section>

     
        <section className="commentSection comment">
          <h2 className="comment__title">3 Comments</h2>
          {/* COMMENT FORM */}
          <figure className="form__avatar">{/* USER PROFILE */}</figure>
          <section className="formSection">
            <form
              action="#"
              className="comment__form form"
              name="userForm"
              method="POST"
            >
              <h3 className="form__label">JOIN THE CONVERSATION</h3>
              <textarea
                name="userComment"
                id="userComment"
                placeholder="Write comment here"
                className="form__input"
              ></textarea>
              <button type="submit" className="form__submit">
                COMMENT
              </button>
            </form>
          </section>
          {/* COMMENT DISPLAY */}
          <section className="commentCards">
            <section className="commentCard">
              <figure className="commentCard__avatar">{/* AVATAR */}</figure>
              <section className="commentCard__body">
                <section className="commentCard__info">
                  <p className="commentCard__name">Theodore</p>
                  <p className="commentCard__time">7/4/2018</p>
                </section>
                <p className="commentCard__text">
                  How can someone be so good!!! You can tell he lives for this
                  and loves to do it every day. Everytime I see him I feel
                  instantly happy! He’s definitely my favorite ever!
                </p>
              </section>
            </section>
          </section>
        </section>

        <section className="playlistSection playlist">
          <h3 className="playlist__title">NEXT VIDEO</h3>
          <section className="playlistCards">
            <section className="playlistCard">
              <figure className="playlistCard__thumbnail">
                {/* THUMBNAIL */}
              </figure>
              <section className="playlistCard__boday">
                <p className="playlistCard__title">Become A Travel Pro</p>
                <p className="playlistCard__author">Todd Welch</p>
              </section>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

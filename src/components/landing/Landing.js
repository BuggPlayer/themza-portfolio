import React from "react";
import "./landing.css";
const Landing = () => {
  return (
    <section className="bg-home bg-light home-section" id="home">
      <div className="home-flex">
        <div className="home-content">
          <p className="">Digital Marketing</p>
          <img className="underline-img" src={"./assets/img/underline.svg"} />

          <p className="home-title">
            Grow Your <br /> Business Google Ads &amp; Instagram Ads
          </p>
          <p className="text-muted">
            Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula
            quis tidunt vitae massa.
          </p>
          <div className="last-container">
            <button className="btn btn-primary" href="/">
              Contact Us
            </button>
            <a className="video-play-icon videoiconflex text-dark mr-2" href="/">
              <img
                className="mdi-play-circle-outline"
                src={"./assets/img/play_circle.svg"}
              />
              Watch Intro Video
            </a>
          </div>
        </div>
        <div className="home-img">
          <img className="" src={"./assets/img/home_image.svg"} />
        </div>
      </div>
    </section>
  );
};

export default Landing;

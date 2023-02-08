import React from "react";
import { landingHeader, landingSubtitle, landingTitle } from "../../utiliti/Data";
import "./landing.css";
const Landing = () => {
  return (
    <section className="bg-color-main " id="home">
      <div className="home-flex">
        <div className="home-content">
          <p className="">{landingTitle}</p>
          <img className="underline-img" src={"./assets/img/underline.svg"} />

          <p className="home-title">{landingHeader}</p>
          <p className="text-subtile">
          {landingSubtitle}
          </p>
          <div className="last-container">
            <button className="btn btn-primary" href="/">
              Contact Us
            </button>
          
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

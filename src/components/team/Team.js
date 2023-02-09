import React from "react";
import "./team.css";
import {TeamCarousel} from "../carousel/TeamCarousel";

const Team = () => {
  return (
    <section id="team" className="team-section">
      <article className="team-summary-section">
        <h1 className="title-heading ">Meet Our Expert People</h1>
        <p className="text-muted f-17 mt-3">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu <br /> fringilla auctor In eleifend maximus nisi
          sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <TeamCarousel />
    </section>
  );
};

export default Team;

import React from "react";
import "./team.css";
import { TeamCarousel } from "../carousel/TeamCarousel";
import { meetTeam, teamsubtitle } from "../../utiliti/Data";

const Team = () => {
  return (
    <section id="team" className="team-section bg-color-main ">
      <article className="team-summary-section">
        <h1 className="title-heading ">{meetTeam}</h1>
        <p className="text-muted f-17 mt-3">{teamsubtitle}</p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <TeamCarousel />
    </section>
  );
};

export default Team;

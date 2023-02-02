import React from "react";
import "./feature.css";
const Feature = () => {
  return (
    <section className="  bg-features bg-light">
      <figure className="mt-4 home-img bg-feature-img-container">
        <img className="img-fluid" src={"./assets/img/team_collab.svg"} />
      </figure>
      <article className="bg-feature-details-section">
        <h1 className="bg-feature-details-heading">
          Team Collaboration in real time
        </h1>
        <p className="bg-feature-details-para mt-4 text-muted">
          Praesent ut tincidunt massa vel facilisis dui Integer mattis quis
          augue in rhoncus Integer mattis enim vel eros bibendum egestas id
          laoreet nisi Praesent malesuada eros at bibendum eleifend Nam nec urna
          hendrerit interdum risus Donec faucibus quis magna sit amet laoreet
          Maecenas finibus semper massa in finibus est venenatis quis.
        </p>
        <button className="btn btn-primary mr-3" href="/">
          Explore More
        </button>
      </article>
    </section>
  );
};

export default Feature;

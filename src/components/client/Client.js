import React from "react";
import "./client.css";
const Client = () => {
  return (
    <section className="client-section bg-color-main ">
      <article className="clients-summary-section">
        <h1 className="title-heading ">All Trusted Brands</h1>
        <p className="text-muted">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu <br /> fringilla auctor In eleifend maximus nisi
          sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <div className="mt-5 pt-4 row1">
        <div className="col-lg-3">
          <div className="client-images mt-4">
            <img
              src={"./assets/img/sponsor_logo_1.svg"}
              alt="logo-img"
              className="mx-auto img-fluid d-block"
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="client-images mt-4">
            <img
              src={"./assets/img/sponsor_logo_2.svg"}
              alt="logo-img"
              className="mx-auto img-fluid d-block"
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="client-images mt-4">
            <img
              src={"./assets/img/sponsor_logo_3.svg"}
              alt="logo-img"
              className="mx-auto img-fluid d-block"
            />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="client-images mt-4">
            <img
              src={"./assets/img/sponsor_logo_4.svg"}
              alt="logo-img"
              className="mx-auto img-fluid d-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;

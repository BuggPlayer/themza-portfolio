import React from "react";
import "./pricing.css";

const Priceing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <article className="pricing-summary-section">
        <p className="price-title ">Best Pricing Package</p>
        <p className="text-muted ">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu
          <br />
          fringilla auctor In eleifend maximus nisi sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>

      <div className="pricing-card-container">
        {[1, 2, 3].map((item) => {
          return (
            <div className="pricing-card">
              <img
                className="pricing-card-main-img"
                src={"./assets/img/person.svg"}
              />
              <h1 className="pricing-card-heading">Starter</h1>
              <p className="">Features</p>
              <p className="price-card-img">
                <img
                  className="checked-removed-icon"
                  src={"./assets/img/checked.svg"}
                />
                <b>Unlimited</b> Target Audience
              </p>
              <p className="price-card-img">
                <img
                  className="checked-removed-icon mr-2"
                  src={"./assets/img/checked.svg"}
                />
                <b>1</b> User Account
              </p>
              <p className="price-card-img">
                <img
                  className="checked-removed-icon mr-2"
                  src={"./assets/img/remove.svg"}
                />
                <b>100+</b> Video Tuts
              </p>
              <p className="price-card-img">
                <img
                  className="checked-removed-icon"
                  src={"./assets/img/remove.svg"}
                />
                <b>Public</b> Displays
              </p>
              <p className=" text-muted">
                Semper urna veal tempus pharetra elit habisse platea dictumst.
              </p>
              <div className="pricing-plan text-muted ">
                <s>$9.99</s>
                <span className="plan  text-dark">$8.99</span>
              </div>
              <p className="text-muted ">Per Month</p>
              <button className=" btn btn-primary btn-rounded">
                Purchase Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Priceing;

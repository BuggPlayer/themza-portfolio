import React from "react";
import "./pricing.css";

const Priceing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <article className="pricing-summary-section">
        <p className="price-title ">Best Pricing Package</p>
        <p className="text-muted f-17 ">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu
          <br />
          fringilla auctor In eleifend maximus nisi sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <div className="pricing-card-container">
        <div className="pricing-card">
          <img
            className="pricing-card-main-img"
            src={"./assets/img/person.svg"}
          />
          <h1 className="pricing-card-heading f-20">Starter</h1>
          <p className="mt-4 pt-2 mb-2 f-18">Features</p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>Unlimited</b> Target Audience
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>1</b> User Account
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>100+</b> Video Tuts
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>Public</b> Displays
          </p>
          <p className="mt-4 pt-2 text-muted">
            Semper urna veal tempus pharetra elit habisse platea dictumst.
          </p>
          <div className="pricing-plan text-muted mt-4 pt-2">
            <s>$9.99</s>
            <span className="plan pl-3 text-dark">$8.99</span>
          </div>
          <p className="text-muted mb-0">Per Month</p>
          <button className="mt-4 btn btn-primary btn-rounded">
            Purchase Now
          </button>
        </div>
        <div className="pricing-card mt-4">
          <div className="pricing-badge">
            <span className="badge">Featured</span>
          </div>
          <img
            className="pricing-card-main-img"
            src={"./assets/img/group_green.svg"}
          />
          <h1 className="pricing-card-heading f-20 text-primary">Personal</h1>
          <p className="mt-4 pt-2 mb-2 f-18">Features</p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>Unlimited</b> Target Audience
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>1</b> User Account
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>100+</b> Video Tuts
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>Public</b> Displays
          </p>
          <p className="mt-4 pt-2 text-muted">
            Semper urna veal tempus pharetra elit habisse platea dictumst.
          </p>
          <div className="pricing-plan text-muted mt-4 pt-2">
            <s>$9.99</s>
            <span className="plan pl-3 text-dark">$8.99</span>
          </div>
          <p className="text-muted mb-0">Per Month</p>
          <button className="mt-4 btn btn-primary btn-rounded">
            Purchase Now
          </button>
        </div>
        <div className="pricing-card mt-4">
          <img
            className="pricing-card-main-img"
            src={"./assets/img/group_add.svg"}
          />
          <h1 className="pricing-card-heading f-20">Ultimate</h1>
          <p className="mt-4 pt-2 mb-2 f-18">Features</p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>Unlimited</b> Target Audience
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/checked.svg"}
            />
            <b>1</b> User Account
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>100+</b> Video Tuts
          </p>
          <p className="mb-2 f-18">
            <img
              className="checked-removed-icon mr-2"
              src={"./assets/img/remove.svg"}
            />
            <b>Public</b> Displays
          </p>
          <p className="mt-4 pt-2 text-muted">
            Semper urna veal tempus pharetra elit habisse platea dictumst.
          </p>
          <div className="pricing-plan text-muted mt-4 pt-2">
            <s>$9.99</s>
            <span className="plan pl-3 text-dark">$8.99</span>
          </div>
          <p className="text-muted mb-0">Per Month</p>
          <button className="mt-4 btn btn-primary btn-rounded">
            Purchase Now
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Priceing;

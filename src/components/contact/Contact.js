import React from "react";
import "./contact.css"
const Contact = () => {
  return (
    <section className="section" id="contact">
      <article className="contact-summary-section">
        <h3 className="title-heading mt-4">Let's talk about everything!</h3>
        <p className="text-muted f-17 mt-3">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu <br /> fringilla auctor In eleifend maximus nisi
          sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <div className="contact-input-section">
        <figure className="mt-4 home-img text-center bg-contact-img-container">
          <div className="animation-2"></div>
          <div className="animation-3"></div>
          <img className="img-fluid" src={"./assets/img/bg_1.svg"} />
        </figure>
        <form method="post" name="contact-form" id="contact-form" className="">
          <div className="row">
            <div className="col-lg-6">
              <div className="mt-3 form-group">
                <label className="contact-lable">First Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control form-control"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3 form-group">
                <label className="contact-lable">Last Name</label>
                <input
                  name="name"
                  id="lastname"
                  type="text"
                  className="form-control form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-3 form-group">
                <label className="contact-lable">Email Address</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="form-control form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="mt-3 form-group">
                <label className="contact-lable">Your Message</label>
                <textarea
                  name="comments"
                  id="comments"
                  rows="5"
                  className="form-control form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="mt-3 text-right col-lg-12">
              <input
                id="submit"
                name="send"
                color="primary"
                type="submit"
                className="submitBnt btn btn-primary btn-round form-control"
                value="Send Message"
                style={{ width: "auto", color: "rgb(255, 255, 255)" }}
              />
              <div id="simple-msg"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

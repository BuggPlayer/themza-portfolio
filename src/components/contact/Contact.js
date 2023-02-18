import React from "react";
import { contactUsHeadling, contactUsSubtitle } from "../../utiliti/Data";
import "./contact.css";
const Contact = () => {
  return (
    <section className="" id="contact">
      <article className="contact-summary-section">
        <h3 className="title-heading ">{contactUsHeadling}</h3>
        <p className="text-muted">{contactUsSubtitle}</p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <div className="contact-input-section">
        <div className=" ">
          <img className="img-fluid" src={"./assets/img/bg_1.svg"} />
        </div>
        <form
          method="post"
          name="contact-form"
          id="contact-form"
         
          // style={{ width: "45%" }}
        >
          <div className="contact-input-flex" >

            
            <div className="">
              <label className="">First Name</label>
              <input
                name="name"
                id="name"
                type="text"
                className="form-control "
              />
            </div>

            <div className="mt-3 form-group">
              <label className="">Last Name</label>
              <input
                name="name"
                id="lastname"
                type="text"
                className="form-control margin-left"
              />
            </div>
          </div>
          <div className="">
            <div className="col-lg-12">
              <div className="mt-3 form-group">
                <label className="">Email Address</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="form-control form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="">
                <label className="">Your Message</label>
                <textarea
                  name="comments"
                  id="comments"
                  rows={4}
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

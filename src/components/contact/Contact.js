import React, { useState } from "react";
import { contactUsHeadling, contactUsSubtitle } from "../../utiliti/Data";
import { validateInput } from "../../utiliti/Utils";
import { Input } from "../input/Input";
import "./contact.css";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    email: "",
  });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
  });
  const [error, setError] = useState({ email: false, password: false });

  const onSubmitHandler = async (ev) => {
    ev.preventDefault();
    if (!Object.values(error).includes(true)) {
      const postData = formInput;
      console.log(postData);
      return;
    }
  };

  const onChangeHandler = (ev, field) => {
    const inputElement = ev.target.value;
    validateInput(ev, field, error, errorMessages, setError, setErrorMessages);
    let formInputCopy = formInput;
    formInputCopy = { ...formInputCopy, [field]: inputElement };
    setFormInput(formInputCopy);
  };

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
          onSubmit={(ev) => {
            onSubmitHandler(ev);
          }}
          method="post"
          name="contact-form"
          id="contact-form"

          // style={{ width: "45%" }}
        >
          <div className="contact-input-flex">
            <Input
              addClass2="form-control"
              labelText="First Name"
              fieldName="name"
              fieldType="text"
              fieldId="name"
              onChange={(ev) => {
                onChangeHandler(ev, "name");
              }}
            />
            <Input
              addClass="mt-3 form-group"
              addClass2="form-control"
              labelText="Last Name"
              fieldName="lastname"
              fieldType="text"
              fieldId="lastname"
              onChange={(ev) => {
                onChangeHandler(ev, "lastname");
              }}
            />
          </div>
          <div className="">
            <div className="col-lg-12">
              <Input
                addClass="mt-3 form-group"
                addClass2="form-control"
                labelText="Email Address"
                fieldName="email"
                fieldType="email"
                fieldId="email"
                onChange={(ev) => {
                  onChangeHandler(ev, "email");
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="">
                <label className="">Your Message</label>
                <textarea
                  onChange={(ev) => {
                    onChangeHandler(ev, "comments");
                  }}
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
                type="button"
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

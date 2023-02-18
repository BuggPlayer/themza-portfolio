import React from "react";
import { TestimonialCarousel } from "../carousel/TestimonialCarousel";

const Testimonial = () => {
  return (
    <section className="" id="clients">
      <article className="clients-summary-section">
        <h1 className="title-heading mt-4">Take Our Clients’ Word for It</h1>
        <p className="footer-p-text f-17 mt-3">
          Do you want to know why so many businesses like working with us?
          Here’s what they have to say about it.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <TestimonialCarousel />
    </section>
  );
};

export default Testimonial;

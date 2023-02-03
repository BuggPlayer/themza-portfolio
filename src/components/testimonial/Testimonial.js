import React from "react";
import { TestimonialCarousel } from "../carousel/TestimonialCarousel";

const Testimonial = () => {
  return (
    <section className="section" id="clients">
      <article className="clients-summary-section">
        <h1 className="title-heading mt-4">Clients Loved Products</h1>
        <p className="text-muted f-17 mt-3">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu <br /> fringilla auctor In eleifend maximus nisi
          sed vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <TestimonialCarousel />
    </section>
  );
};

export default Testimonial;

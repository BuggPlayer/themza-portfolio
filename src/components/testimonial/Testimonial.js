import React from "react";

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
      <div className="mt-5 pt-4 row">CAROUSEL</div>
    </section>
  );
};

export default Testimonial;

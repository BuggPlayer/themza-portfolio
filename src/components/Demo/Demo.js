import React from "react";
import "./demo.css"
const Demo = () => {
  return (
    <section className="bg-light">
      <article className="section-demo-flex">
        <h2>
          Get Started With <span className="text-primary">Thamza</span>
        </h2>
        <p className="demo-p-text-w ">
          Quisque iaculis urna eu magna semper quis ultrices lectus efficitur
          Praesent convallis velit urna, vitae tristique tellus feugiat a
          maecenas diam metus convallis id cursus vel tellus.
          <br /> Curabitur ullamcorper feugiat convallis.
        </p>
        <div className="row">
          <button className="btn btn-soft-primary btn-round mr-3 btn-rounded">
            Request a demo
          </button>
          <a className="btn btn-primary btn-round btn-rounded" href="/">
            Get Started Now
          </a>
        </div>
      </article>
    </section>
  );
};

export default Demo;

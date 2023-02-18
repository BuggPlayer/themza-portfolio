import React from "react";
import "./demo.css";
const Demo = () => {
  return (
    <section className="bg-color-main">
      <article className="section-demo-flex">
        <h2>
          Get Started With <span className="text-primary">Buggplayer</span>
        </h2>
        <p className="demo-p-text-w ">
          We provide Technology Services to our customers,
          enabling them to achieve superior business outcomes. We come in as a
          trusted Partner completely owning the Technology piece. We brainstorm
          your business problems, arrive at the right solution framework, deploy
          the right blend of technical resources, and thereon provide optimal
          delivery at every step of the project implementation. We offer a
          variety of services in the area of Mobile Apps Development, Software
          Development, Web Application Development and Digital Marketing.
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

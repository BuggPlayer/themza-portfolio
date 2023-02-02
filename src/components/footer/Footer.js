import React from "react";

const Footer = () => {
  return (
    <footer className="section bg-light bg-footer pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info mt-4">
              <img
                src="/static/media/logo-dark.4272faac.png"
                alt=""
                height="22"
              />
              <p className="text-muted mt-4 mb-2">
                Aenean lacus enim Praesent congue praesent viverra interdum
                maximus lobortis.
              </p>
              <div className="team-social mt-4 pt-2">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="text-reset" href="/">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a className="text-reset" href="/">
                      <i className="mdi mdi-twitter"></i>
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a className="text-reset" href="/">
                      <i className="mdi mdi-google"></i>
                    </a>
                  </li>{" "}
                  <li className="list-inline-item">
                    <a className="text-reset" href="/">
                      <i className="mdi mdi-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pl-0 md-lg-5 row">
              <div className="col-lg-6">
                <div className="mt-4">
                  <h5 className="f-20">Services</h5>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <a href="/">Web Design</a>
                    </li>
                    <li>
                      <a href="/">Lorem Test</a>
                    </li>
                    <li>
                      <a href="/">Credit</a>
                    </li>
                    <li>
                      <a href="/">Ui Design</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mt-4">
                  <h5 className="f-20">Company</h5>
                  <ul className="list-unstyled footer-link mt-3">
                    <li>
                      <a href="/">Features</a>
                    </li>
                    <li>
                      <a href="/">Faq</a>
                    </li>
                    <li>
                      <a href="/">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-4">
              <h5 className="f-20">Subscribe</h5>
              <div className="subscribe mt-4 pt-1">
                <form action="#" className="">
                  <input
                    placeholder="Enter Email"
                    type="text"
                    className="form-control"
                    style={{ height: "auto" }}
                  />
                  <button className="btn btn-primary btn btn-primary">
                    <i className="mdi mdi-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <p className="text-muted mb-0">
                2023 © Thamza. Develop by Themesdesign
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

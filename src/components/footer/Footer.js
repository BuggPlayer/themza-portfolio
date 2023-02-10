import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-light bg-footer pb-5">
      <div className="footer-section">
        <article className="footer-article">
          <img
            className="logo-image"
            src="../../../assets/img/logo.png"
            alt="logo"
          />
          <p className="footer-p-text mt-4 mb-2">
            Aenean lacus enim Praesent congue praesent viverra interdum maximus
            lobortis.
          </p>
          <ul className="social-media-links mt-4 pt-2">
            <li className="social-media-link-container">
              <a className="social-media-link">
                <img
                  className="social-media-logo"
                  src="../../../assets/img/facebook.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="social-media-link-container">
              <a className="social-media-link">
                <img
                  className="social-media-logo"
                  src="../../../assets/img/twitter.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="social-media-link-container">
              <a className="social-media-link">
                <img
                  className="social-media-logo"
                  src="../../../assets/img/pinterest_logo.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="social-media-link-container">
              <a className="social-media-link">
                <img
                  className="social-media-logo"
                  src="../../../assets/img/googleIcon.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </article>
        <div  className="footer-link-flex">
          <div className="footer-links">
            <h5 className="f-20">Services</h5>
            <ul className="list-unstyled footer-link mt-3">
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="/">App Develop</a>
              </li>
              <li>
                <a href="/">MERN</a>
              </li>
              <li>
                <a href="/">Ui Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
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

        <div className="footer-subscribe">
          <h5 className="f-20">Subscribe</h5>
          <div className="subscribe mt-4 pt-1">
            <form action="#" className="">
              <input
                placeholder="Enter Email"
                type="text"
                className="form-control"
              />
              <button className="btn btn-primary btn btn-primary">
                <img
                  className="message-send-icon"
                  src="../../../assets/img/sent.svg"
                  alt="send"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-copyright-section ">
        <p className="text-center footer-p-text mb-0">
          2023 &copy; Buggplayer. Develop by Buggplayer
        </p>
      </div>
    </footer>
  );
};

export default Footer;

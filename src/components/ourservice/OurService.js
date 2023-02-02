import React from "react";
import "./service.css";
const OurService = () => {
  const CardDatd = [];
  return (
    <section className="section bg-services" id="services">
      <article className="services-content">
        <h1 className="services-content-heading">Provide Awesome Services</h1>
        <p className="services-content-para">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
          vulputate.
        </p>
        <img className="underline-img" src={"./assets/img/underline.svg"} />
      </article>
      <div className="cards-container">
        {[1, 2, 3, 4].map((item) => {
          return (
            <article className="card">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={"./assets/img/instagram.svg"}
                />
              </div>
              <h1 className="card-heading">Instagram Ads</h1>
              <p className="card-para">
                Quisque rhoncus lectus ut lectus hendrerit at convallis lorem
                ornare pellentesque lobortis hendrerit mattis.
              </p>
              <a className="card-link">
                Learn More{" "}
                <img
                  className="forward-icon"
                  src={"./assets/img/arrow_forward.svg"}
                />
              </a>
            </article>
          );
        })}

        {/* <article className="card">
          <figure className="card-image-container">
            <img className="card-image" src={"./assets/img/google.svg"} />
          </figure>
          <h1 className="card-heading">Google Ads</h1>
          <p className="card-para">
            Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare
            pellentesque lobortis hendrerit mattis.
          </p>
          <a className="card-link">
            Learn More{" "}
            <img
              className="forward-icon"
              src={"./assets/img/arrow_forward.svg"}
            />
          </a>
        </article>
       
        <article className="card">
          <figure className="card-image-container">
            <img className="card-image" src={"./assets/img/youtube.svg"} />
          </figure>
          <h1 className="card-heading">Youtube Ads</h1>
          <p className="card-para">
            Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare
            pellentesque lobortis hendrerit mattis.
          </p>
          <a className="card-link">
            Learn More{" "}
            <img
              className="forward-icon"
              src={"./assets/img/arrow_forward.svg"}
            />
          </a>
        </article> */}
      </div>

      <div className="services-details-section">
        <article className="services-details-article ">
          <p className="services-details-subheading">WHY CHOOSE US</p>
          <h2 className="services-details-heading">
            Boots Your Website Thamza!
          </h2>
          <p className="service-details-description">
            Morbi at erat et tortor tempor sodales non eu lacus Donec at gravida
            nunc vitae volutpat libero fusce sit amet mi quis ipsum tempus
            gravida in quis felis Aliquam fringilla tempus scelerisque Phasellus
            viverra tincidunt suscipit. Praesent non arcu vitae augue aliquam
            eget vitae Pellentesque sem mauris porta eget ultrices eros.
          </p>
          <button className="btn service-details-btn">Discover More</button>
        </article>
        <div className="service-details-cards-container">
          {[1, 2, 3].map((item) => {
            return (
              <div className="service-detail-card ">
                <div className="service-detail-card-box">
                  <p className="service-detail-card-box-total">
                    <b className="service-detail-card-box-total-value">49 </b>
                    <span className="service-detail-card-box-total-plus">
                      +
                    </span>
                  </p>
                  <p className="service-detail-card-box-type">Employees</p>
                </div>
                <p className="service-detail-card-description">
                  Aliquam egestas vehicula sapien cibus sit amet rutrum dolor
                  molestie.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService;

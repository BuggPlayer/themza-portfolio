import React from "react";
import { servicesContenPara, servicesContentHeading } from "../../utiliti/Data";
import "./service.css";
const OurService = () => {
  const CardDatd = [];
  return (
    <section className="" id="services">
      <article className="services-content">
        <div>
          <h1 className="services-content-heading">{servicesContentHeading}</h1>
          <p className="services-content-para">{servicesContenPara}</p>
          {/* <img className="underline-img" src={"./assets/img/underline.svg"} /> */}
        </div>
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
      </div>



      <div className="services-details-section">
        <article className="services-details-article ">
          <p className="services-details-subheading">WHY CHOOSE US</p>
          <h2 className="services-details-heading">
            Boots Your Website Buggplayer!
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

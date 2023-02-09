import React from "react";
import {
  emplyeDetails,
  serviceData,
  servicesContenPara,
  servicesContentHeading,
  whychooseusDesc,
  whyChoseus,
  whyChoseusHeading,
} from "../../utiliti/Data";
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
        {serviceData.map((item) => {
          return (
            <article className="card">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={item.icon}
                  // src={"./assets/img/instagram.svg"}
                />
              </div>
              <h1 className="card-heading">{item.name}</h1>
              <p className="card-para">{item.desc}</p>
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
          <p className="services-details-subheading">{whyChoseus}</p>
          <h2 className="services-details-heading">
          {whyChoseusHeading}
          </h2>
          <p className="service-details-description">
           {whychooseusDesc}
          </p>
          <button className="btn service-details-btn">Discover More</button>
        </article>
        <div className="service-details-cards-container">
          {emplyeDetails.map((item) => {
            return (
              <div className="service-detail-card ">
                <div className="service-detail-card-box">
                  <p style={{margin:0}} className="service-detail-card-box-total">
                    <b className="service-detail-card-box-total-value">{item.total} </b>
                    <span className="service-detail-card-box-total-plus">
                      +
                    </span>
                  </p>
                  <p className="service-detail-card-box-type">{item.name}</p>
                </div>
                <p className="service-detail-card-description">
                 {item.desc}
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

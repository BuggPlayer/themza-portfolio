import { useState, useEffect } from "react";
import "./TeamCarousel.css";
import team from "./teams.json";

export const TeamCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(team.data);
  const length = carouselItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      const indexCopy = index < length - 2 ? index + 1 : index;
      setIndex(indexCopy);
      currentCarouselBasedOnIndex(indexCopy);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const currentCarouselBasedOnIndex = (indexR) => {
    setIndex(indexR);
    const carouselItemsCopy = carouselItems.map((item, indexReq) => {
      return indexReq === indexR || indexReq === indexR + 1
        ? { ...item, is_active: 1 }
        : { ...item, is_active: 0 };
    });
    setCarouselItems(carouselItemsCopy);
  };

  return (
    <>
      <div className="carousal-section  team-carousel">
        {length &&
          carouselItems.map((item, indexReq) => (
            <section
              key={indexReq}
              className={`team-card-container ${
                item.is_active === 1 ? "" : "hide-class"
              }`}
            >
              <article className="team-card-detail">
                <h5 className="mt-2">{item.user_name}</h5>
                <span className="team-badge bg-primary text-white rounded f-14 mt-2">
                  ##{item.user_badge}
                </span>
                <p className="carosual-subtitle">{item.description}</p>
                <ul className="social-media-links mt-4 pt-2">
                  <li className="social-media-link-container">
                    <a href={item.fb_url} className="social-media-link">
                      <img
                        className="social-media-logo"
                        src="../../../assets/img/facebook.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-media-link-container">
                    <a href={item.twitter_url} className="social-media-link">
                      <img
                        className="social-media-logo"
                        src="../../../assets/img/twitter.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-media-link-container">
                    <a href={item.pinterest_url} className="social-media-link">
                      <img
                        className="social-media-logo"
                        src="../../../assets/img/pinterest_logo.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="social-media-link-container">
                    <a href={item.google_url} className="social-media-link">
                      <img
                        className="social-media-logo"
                        src="../../../assets/img/googleIcon.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <div className="team-card-profile-image-container">
                <img
                  className="team-card-profile-image img-fluid rounded"
                  src={item.profile_image}
                  alt="user"
                />
              </div>
            </section>
          ))}
      </div>
      <div className="carousel-btn-section">
        {length &&
          carouselItems
            .filter((itemreq, indexR) => (indexR !== length - 1 ? itemreq : ""))
            .map((item, indexReq) => (
              <button
                className="carousel-btns"
                key={indexReq}
                onClick={() => currentCarouselBasedOnIndex(indexReq)}
              >
                <img
                  className="carousel-btn-image"
                  src={
                    index === indexReq
                      ? "../../../assets/img/dark_line_btn.svg"
                      : "../../../assets/img/light_line_btn.svg"
                  }
                  alt="circle"
                />
              </button>
            ))}
      </div>
    </>
  );
};

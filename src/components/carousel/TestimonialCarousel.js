import { useState, useEffect } from "react";
import "./TestimonialCarousel.css";
import testimonials from "./testimonials.json";

export const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(testimonials.data);
  const length = carouselItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      const indexCopy = index < length - 1 ? index + 1 : 0;
      setIndex(indexCopy);
      currentCarouselBasedOnIndex(indexCopy);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const currentCarouselBasedOnIndex = (indexR) => {
    setIndex(indexR);
    const carouselItemsCopy = carouselItems.map((item, indexReq) => {
      return indexReq === indexR
        ? { ...item, is_active: 1 }
        : { ...item, is_active: 0 };
    });
    setCarouselItems(carouselItemsCopy);
  };
  console.log(carouselItems);

  return (
    <>
      <div className="testimonial-carousel">
        {length &&
          carouselItems.map((item, indexReq) => (
            <div
              key={indexReq}
              className={`testimonial-card-container ${
                item.is_active === 1 ? "" : "hide-class"
              }`}
            >
              <article className="testimonial-card-detail">
                <h5 className="line-height_1_6">{item.description}</h5>
                <div>
                  <img
                    className="quote-icon"
                    src="../../../assets/img/quote.svg"
                    alt="quote"
                  />
                </div>
                <h5 className="f-18">{item.user_name}</h5>
                <p className="text-primary mb-0">- {item.designation}</p>
              </article>
              <div>
                <img className="" src={item.profile_image} alt="user" />
              </div>
            </div>
          ))}
      </div>
      <div className="carousel-btn-section">
        {length &&
          carouselItems.map((item, indexReq) => (
            <button
              className="carousel-btns"
              key={indexReq}
              onClick={() => currentCarouselBasedOnIndex(indexReq)}
            >
              <img
                className={`carousel-btn-image ${
                  indexReq === index ? "active-btn" : ""
                }`}
                src={item.profile_image}
                alt="circle"
              />
            </button>
          ))}
      </div>
    </>
  );
};

import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from this Nairobi car rental company for a road trip and was extremely satisfied with the service. The car was comfortable and well-maintained, and the staff was very helpful in providing me with all the necessary information for my trip. I would definitely use this company again in the future.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">John Smith</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from this Nairobi car rental company for a business trip and was extremely impressed with the service. The car was in great condition and the staff was friendly and helpful throughout the entire process. I would definitely recommend this company to anyone in need of a rental car in Nairobi.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Ayande Vova</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had a great experience renting a car from this Nairobi car rental company for my family vacation. The car was clean and well-maintained, and the staff was very accommodating and accommodating. I was able to book the car online and pick it up at the airport, which made the process very convenient. I would definitely use this company again.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Chloe Kate</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I rented a car from this Nairobi car rental company for a week and was very pleased with the service. The car was in excellent condition and the staff was very friendly and accommodating. I had a problem with the car and they were able to quickly fix it and get me back on the road. I would definitely recommend this company to others.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Olivier Rose Mayer</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;

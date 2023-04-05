import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Promotion({ dataPromotion }) {
  console.log("dataPromotion >>>> ", dataPromotion);
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    className: "",
    slidesToScroll: 1,
    pauseOnHover:true
  }

  return (
    <Slider {...settings}>
      {dataPromotion?.promotions.data[0].attributes.pictures.data.map(
        (banner, index) => (
          <div className="text-3xl ">
            <div className="grid relative mb-24 place-items-center ">
              <div key={index} className="flex relative ">
                <img
                  src={process.env.NEXT_PUBLIC_API_URL + banner.attributes?.url}
                  alt="img"
                  className="md:h-96"
                />
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
}

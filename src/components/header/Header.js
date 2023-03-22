import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Buttons from "../utils/Buttons";

export default function Header({ data }) {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    className: "",
    slidesToScroll: 1,
  };
  console.log("All Slider", data.sliders);
  return (
    <Slider {...settings}>
      {["", ""].map((banner, index) => (
        <div key={index} className="flex relative h-[60vh]">
          <div className="flex justify-left z-10 max-w-screen-2xl -mt-155 container">
            <div className="z-50 text-center grid place-content-center text-white h-[60vh] w-full">
              <h1 className="font-extrabold text-[45px] text-center">
                PRÉMIO
                <br />
                CASA AMIGA DO CLIENTE
              </h1>
            </div>
          </div>
          <Image
            className="relative"
            src={
              "https://picsum.photos/800" ||
              process.env.NEXT_PUBLIC_API + banner.image?.data?.attributes?.url
            }
            alt={banner.Name}
            fill
            priority={true}
            placeholder="blur"
            blurDataURL={
              process.env.NEXT_PUBLIC_API + banner.image?.data?.attributes?.url
            }
          />
        </div>
      ))}
    </Slider>
  );
}

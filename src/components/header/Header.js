import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButtons } from "../utils/Buttons";
import { useAuth } from "@/services/auth";

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
  const { user,logOut} = useAuth();
  const Icon = () => <Image src="/other/user.svg" width={10} height={10} />;
  return (
    <>
      <div className="z-50 left-10 top-5 absolute">
        <Image src={"/other/logo.png"} width={100} height={60} />
      </div>
      <div className="z-50 right-10 top-5 absolute flex">
        {user ? (
          <IconButtons Icon={Icon} label="Logout"
          action={logOut}
          />
        ) :(
          <>
          <IconButtons Icon={Icon} label="Login"
          action={() => window.location.href = "/login"}
           />
          <IconButtons Icon={Icon} label="Register" 
          action={() => window.location.href = "/register"}
          /></>
          
        ) }
      </div>
      <Slider {...settings}>
        {data.sliders.data[0].attributes.pictures.data.map((banner, index) => (
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
              src={process.env.NEXT_PUBLIC_API + banner.attributes?.url}
              alt={banner.Name}
              fill
              priority={true}
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_API +
                banner.image?.data?.attributes?.url
              }
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButtons, LinkButton } from "../utils/Buttons";
import { useAuth } from "@/services/auth";
import { useRouter } from "next/router";


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
  const { user, logOut } = useAuth();
  const router = useRouter();
  const Icon = () => <Image src="/other/user.svg" width={10} height={10} />;
  return (
    <>
      <div className="z-50 left-10 top-5 absolute">
        <Image src={"/other/logo.png"} width={100} height={60} />
        <LinkButton label={"voltar"} className="z-50" />
      </div>

      <div className="z-50 right-10 top-5 absolute flex">
        {user ? (
          <IconButtons Icon={Icon} label="Logout" action={() => logOut()} />
        ) : (
          <>
            <IconButtons
              Icon={Icon}
              label="Login"
              action={() => router.push("/login")}
            />
            <IconButtons
              Icon={Icon}
              label="Register"
              action={() => router.push("/register")}
            />
          </>
        )}
      </div>
      <Slider {...settings}>
        {data.sliders.data[0].attributes.pictures.data.map((banner, index) => (
          <div key={index} className="flex relative h-[60vh]">
            <div className="grid place-content-center z-10 -mt-155">
              <div className="z-50 text-center grid place-content-center text-white h-[60vh] w-full">
                <h1 className="font-extrabold text-[75px] w-full text-center uppercase">
                  {data.sliders.data[0].attributes.title?.split(" ")[0]}
                  <br />
                  {data.sliders.data[0].attributes.title?.split(" ").slice(1,).map(a => a + " ")}
                </h1>
              </div>
            </div>
            <Image
              style={{ objectFit: "cover" }}
              className="relative"
              src={process.env.NEXT_PUBLIC_API_URL + banner.attributes?.url}
              alt={banner.Name}
              fill
              priority={true}
              placeholder="blur"
              blurDataURL={
                process.env.NEXT_PUBLIC_API_URL +
                banner.image?.data?.attributes?.url
              }
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

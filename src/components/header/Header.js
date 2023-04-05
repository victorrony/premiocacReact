import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButtons, LinkButton } from "../utils/Buttons";
import { useAuth } from "@/services/auth";
import { useRouter } from "next/router";

export default function Header({ data }) {
  const [screen, setScreen] = useState(window.screen.width);
  useEffect(() => {
    setScreen(window.screen.width);
  }, [, window.screenX]);
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
      <div className="z-20 left-5 md:left-10 top-5 absolute ">
        {screen < 720 ? (
          <div>
            <Image
              src={"/other/logo.png"}
              width={50}
              height={30}
              className="inline-block"
            />
            <Image
              src={"/other/selo.png"}
              width={35}
              height={30}
              className="inline-block ml-3"
            />
            \
          </div>
        ) : (
          <div>
            <Image
              src={"/other/logo.png"}
              width={100}
              height={60}
              className="inline-block"
            />
            <Image
              src={"/other/selo.png"}
              width={70}
              height={60}
              className="inline-block ml-3"
            />
          </div>
        )}
      </div>

      <div className="z-50 right-4 top-5 absolute flex">
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

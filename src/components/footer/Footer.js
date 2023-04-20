import { SPONSORS } from "@/services/api/queries/sponsors";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import FooterGridItem from "./footerGridItem/FooterGridItem";
import Slider from "react-slick";

export default function Footer() {
  const { loading, error, data } = useQuery(SPONSORS);
  if (error) return "Error";
  if (loading) return "loading";

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 8,
    arrows: false,
    dots: true,
  };

  return (
    <>
      <div className="grid place-content-center w-full">
        <div className="grid place-content-center">
          <Image
            width={400}
            height={200}
            src="/other/logo_2.png"
            alt="logotipo"
            className="my-8 w-64"
          />
        </div>
        <div className="uppercase text-center pb-5 text-[22px] text-white md:text-[50px] inline-block w-full">
          <p>PATROCINADORES</p>
        </div>
        {/* <div className="grid grid-cols-5 gap-4 p-3 sm:grid-cols-5 md:grid-cols-7 md:w-max lg:grid-cols-8 xl:grid-cols-11 m-auto ">
          {data.sponsors?.data.map((s, i) => (
            <FooterGridItem
              key={i}
              i={i}
              name={s.attributes.name}
              img={s.attributes.logo?.data.attributes}
            />
          ))}
        </div> */}
      </div>
      <Slider {...settings}>
        {data.sponsors.data.map((banner, index) => (
          <div className="">
            {console.log("inside", banner)}
            {
              <div
                key={index}
                className="grid lg:ml-8"
              >
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    banner.attributes?.logo.data.attributes.url
                  }
                  alt="img"
                  className=" w-12 h-12 gap-4 lg:w-28 lg:h-28  rounded-[50px]"
                />
              </div>
            }
          </div>
        ))}
      </Slider>
    </>
  );
}

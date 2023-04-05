const { gql, useQuery, useLazyQuery } = require("@apollo/client");
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Videos({}) {
  const VIDEOS = gql`
    query video {
      videos {
        data {
          id
          attributes {
            title
            url
          }
        }
      }
    }
  `;

  const [videos, setVideos] = useState([]);
  const [getVideos] = useLazyQuery(VIDEOS);
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    className: "",
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  useEffect(() => {
    getVideos()
      .then((data) => {
        setVideos(data?.data.videos.data);
        console.log("videos", videos);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <Slider {...settings}>
      <div className="text-3xl mt-24 ">
        <div className="grid relative md:w-100% place-items-center ">
          {videos.map((banner, index) => (
            <div key={index} className="flex relative ">
              <iframe
                src={banner.attributes?.url}
                className="w-full h-full md:w-[700px] md:h-[400px]"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </Slider>
  );
}

const { gql, useQuery, useLazyQuery } = require("@apollo/client");
import { useEffect, useState } from "react";

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
    <div className="text-3xl mt-24 ">
      {
        <div className="grid relative mb-14 place-items-center ">
          {videos.map((banner, index) => (
            <div key={index} className="flex relative ">
              <iframe
                src={banner.attributes?.url}
                width={700}
                height={500}
              ></iframe>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

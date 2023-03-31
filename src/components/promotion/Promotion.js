export default function Promotion({ dataPromotion }) {
  console.log("dataPromotion >>>> ", dataPromotion);

  return (
    <div className="text-3xl ">
      <div className="grid relative mb-24 place-items-center ">
        {dataPromotion?.promotions.data[0].attributes.pictures.data.map(
          (banner, index) => (
            <div key={index} className="flex relative ">
              {/* <Image
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
              /> */}
               <img src={process.env.NEXT_PUBLIC_API_URL + banner.attributes?.url}  alt="img" className="h-96" /> 
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function FooterGridItem({ img, name }) {
  return (
    <img
      src={process.env.NEXT_PUBLIC_API_URL + img.url}
      className=" w-20 h-16 lg:w-24 lg:h-24  rounded-[50px]"
    />
  );
}
// src={
//                     process.env.NEXT_PUBLIC_API_URL +
//                     banner.attributes?.logo.data.attributes.url
//                   }
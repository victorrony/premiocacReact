export default function FooterGridItem({ img, name }) {
  return (
    <img
      src={process.env.NEXT_PUBLIC_API_URL + img.url}
      className=" w-24 h-24 lg:w-28 lg:h-28  rounded-[50px]"
    />
  );
}

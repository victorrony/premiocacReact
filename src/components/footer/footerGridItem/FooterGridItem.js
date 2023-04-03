export default function FooterGridItem({ img, name }) {
  return (
    <img
      src={process.env.NEXT_PUBLIC_API_URL + img.url}
      className=" w-20 h-16 lg:w-28 lg:h-28  rounded-[50px]"
    />
  );
}

export default function FooterGridItem({ img, name }) {
  return (
    <img
      src={process.env.NEXT_PUBLIC_API_URL + img.url}
      className=" w-28 h-28 lg:w-32 lg:h-32  rounded-[50px]"
    />
  );
}

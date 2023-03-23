export default function FooterGridItem({ img, name }) {
  return (
    <img
      src={process.env.NEXT_PUBLIC_API_URL + img.url}
      className="w-full h-full rounded-[50px]"
    />
  );
}

import { SPONSORS } from "@/services/api/queries/sponsors";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import FooterGridItem from "./footerGridItem/FooterGridItem";

export default function Footer() {
  const { loading, error, data } = useQuery(SPONSORS);
  if (error) return "Error";
  if (loading) return "loading";
  return (
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
      <div className="grid grid-cols-4 gap-4 p-3 place-items-center md:grid-cols-6 m-auto md:w-[1270px]">
        {data.sponsors?.data.map((s, i) => (
          <FooterGridItem
            key={i}
            i={i}
            name={s.attributes.name}
            img={s.attributes.logo?.data.attributes}
          />
        ))}
      </div>
    </div>
  );
}

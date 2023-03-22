import { SPONSORS } from "@/services/api/queries/sponsors";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import FooterGridItem from "./footerGridItem/FooterGridItem";

export default function Footer() {
  const { loading, error, data } = useQuery(SPONSORS);
  if (error) return "Error";
  if (loading) return "loading";
  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center">
        <Image
        width={200}
        height={100}
          src="/other/logo.png"
          alt="logotipo"
          className="my-8"
        />
      </div>
      <div className="uppercase text-center text-white text-[50px]">
        <p>PATROCINADORES</p>
      </div>
      <div className="grid grid-cols-5 gap-8 p-14 m-auto w-[1320px]">
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

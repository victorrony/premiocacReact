import { FAGS } from "@/services/api/queries/fags";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import SectionGridCard from "./sectionGridCard/SectionGridCard";

export default function SectionCard({}) {
  const [keyword, setKey] = useState("");
  const { loading, error, data } = useQuery(FAGS);
  if (error) return "Error";
  if (loading) return "Loading";
  console.log(data);
  return (
    <div className="grid  pt-16">
      <div className="grid place-content-center z-10 -mt-155">
              <div className="z-50 text-center grid place-content-center text-white h-20 w-full">
                <h1 className="font-extrabold text-[35px] sm:text-[55px] mb-24 w-full text-center uppercase ">
                 PRÉMIO CAC 2023
                </h1>
              </div>
            </div>
      <div className="grid gap-4 m-auto place-content-center h-full   md:grid-cols-3  md:gap-9">
        {data.faqs.data?.map((f, i) => (
          <SectionGridCard
            key={i}
            id={f.id}
            i={i}
            title={f.attributes.title}
            description={f.attributes.description}
          />
        ))};
      </div>
    </div>
  );
}

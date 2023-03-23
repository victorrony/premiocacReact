import { FAGS } from "@/services/api/queries/fags";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Input } from "../utils/Fields";
import SectionGridCard from "./sectionGridCard/SectionGridCard";

export default function SectionCard() {
  const [keyword, setKey] = useState("");
  const { loading, error, data } = useQuery(FAGS);
  if (error) return "Error";
  if (loading) return "Loading";
  console.log(data);
  return (
    <div className="grid pt-16">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 m-auto place-content-center max-w-4xl">
        {data.faqs.data?.map((f, i) => (
          <SectionGridCard
            key={i}
            id={f.id}
            i={i}
            title={f.attributes.title}
            description={f.attributes.description}
          />
        ))}
      </div>
    </div>
  );
}

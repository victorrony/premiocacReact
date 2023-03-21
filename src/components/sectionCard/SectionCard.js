import { FAGS } from "@/services/api/mutations/queries/fags";
import { useQuery } from "@apollo/client";
import SectionGridCard from "./sectionGridCard/SectionGridCard";


export default function SectionCard() {
  const { loading, error, data } = useQuery(FAGS);
  if(error) return "Error";
  if(loading) return "Loafing";

  return (
    <div className="section_card">
      <div className="section_div_input">
      
        <input type="text"  className="section_input" />
        
      </div>
      <div className="section_grid">
        {
          data.fags?.data?.map((f,i) => <SectionGridCard
          key={i}
          id={f.id}
          title={f.attributes.title}
          p={f.attributes.description}
        />)
        }
      </div>
    </div>
  );
}

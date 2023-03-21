import Buttons from "@/components/utils/Buttons";



export default function SectionGridCard({title,description}) {
  return (
    <div className="section_grid_card">
      <h1 className="grid_card_h1">{title}</h1>
      <p className="grid_card_p">
        {description}
      </p>
      <div>
        <Buttons label={"Ver Mais"} className="bg-red-600" />
      </div>
    </div>
  );
}

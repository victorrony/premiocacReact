import Buttons from "@/components/utils/Buttons";



export default function SectionGridCard(props) {
  return (
    <div className="section_grid_card">
      <h1 className="grid_card_h1">{props.title}</h1>
      <p className="grid_card_p">
        {props.p}
      </p>
      <div>
        <Buttons Nome="Ver Mais" className="btn_img" />
      </div>
    </div>
  );
}

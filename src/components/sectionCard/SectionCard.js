import SectionGridCard from "./sectionGridCard/SectionGridCard";
import "./SectionCard.css";


export default function SectionCard() {
  return (
    <div className="section_card">
      <div className="section_div_input">
      
        <input type="text"  className="section_input" />
        
      </div>
      <div className="section_grid">
        <SectionGridCard
          title="O QUE É CAC?"
          p="lorem jvhvi hvhi gdgcyg gvgyvvvg gvdghhhh
           ygy gygfg yy yyuy yuyuh yugyh ygghvb ghvbvg
            hvvb gvvg gvg njjv jjnn byg uhiui uhuhuhu."
        />

        <SectionGridCard
          title="OBJECTIVOS"
          p="lorem jvhvi hvhi gdgcyg gvgyvvvg gvdghhhh
           ygy gygfg yy yyuy yuyuh yugyh ygghvb ghvbvg
            hvvb gvvg gvg njjv jjnn byg uhiui uhuhuhu."
        />

        <SectionGridCard
          title="OBJECTIVOS"
          p="lorem jvhvi hvhi gdgcyg gvgyvvvg gvdghhhh
         ygy gygfg yy yyuy yuyuh yugyh ygghvb ghvbvg
          hvvb gvvg gvg njjv jjnn byg uhiui uhuhuhu."
        />
      </div>
    </div>
  );
}

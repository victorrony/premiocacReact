import { SPONSORS } from "@/services/api/mutations/queries/sponsors";
import { useQuery } from "@apollo/client";
import FooterGridItem from "./footerGridItem/FooterGridItem";

export default function Footer() {
  const { loading, error, data } = useQuery(SPONSORS);
  if (error) return "Error";
  if (loading) return "loading";
  return (
    <div className="footer_grid">
      <div className="footer_img">
        <img
          src="/other/Logo.png"
          alt="logotipo"
          className="logo_renewFooter"
        />
      </div>
      <div className="footer_p">
        <p>PATROCINADORES</p>
      </div>
      <div className="footer_grid_card">
        {data.sponsors?.data.map((s, i) => (
          <FooterGridItem
            key={i}
            name={s.attributes.name}
            img={s.attributes.logo?.data.attributes}
          />
        ))}
      </div>
    </div>
  );
}

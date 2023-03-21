import FooterGridItem from "./footerGridItem/FooterGridItem";



export default function Footer() {
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
        <FooterGridItem />
        <FooterGridItem />
        <FooterGridItem />
        <FooterGridItem />
        <FooterGridItem />
      </div>
    </div>
  );
}

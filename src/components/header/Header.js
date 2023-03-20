

import Buttons from "../utils/Buttons";


export default function Header() {
  return (
    <header className="header">
      <div className="header_head">
        <img
          src={"./other/Logo.png"}
          alt="Descrição da imagem"
          className="logo"
        />
        <div className="header-btn">
          <Buttons Nome="Login" className="btn_img"/>
          <Buttons Nome="Registrar" className="btn_img"/>
        </div>
      </div>
      <h1 className="header_h1">
        PRÉMIO
        <br />
        CASA AMIGA DO CLIENTE
      </h1>
    </header>
  );
}

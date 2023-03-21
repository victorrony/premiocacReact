import Buttons from "../utils/Buttons";
import { Input } from "../utils/Fields";

export default function LoginForm({onsubmit}) {
  return (
    <form className="">
      <div className="form_register">
        <div className="div_input">
          <Input />
        </div>
        <div className="div_input">
          <Input />
        </div>
        <Buttons Nome="login" className="btn_img" />
      </div>
    </form>
  );
}

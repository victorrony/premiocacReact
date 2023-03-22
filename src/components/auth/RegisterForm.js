import { useAuth } from "@/services/auth";
import { EmailAndPasswordFeild, Input } from "../utils/Fields";
import { useState } from "react";
import { toast } from "react-toastify";
import Buttons, { LinkButton } from "../utils/Buttons";

export default function RegisterForm({ onSubmit }) {
  const { user, register } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: null,
    tel: 0,
  });
  const [username, setUN] = useState("");
  const [accept, sept] = useState([false, "hidden"]);
  const submit = () => {
    if (accept[0]) {
      console.log(
        register(
          {
            email: credentials.email, //credentials.email,
            password: credentials.password, //credentials.password,
            provider: "local",
            tel: credentials.tel,
            username: username,
          },
          false
        )
      );
    } else {
      sept([false, ""]);
      toast("Aceite os termos antes de continuar!");
    }
  };
  return (
    <form
      className="grid place-content-center p-10 gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!credentials.password) {
          toast("O campo da senha esta vazia.");
        } else if (String(credentials.password).length < 6) {
          toast("A senha tem que conter no minimo 6 letras.");
        } else if (String(credentials.password).length >= 6) {
          submit();
        } else toast("Algo ocorreu errado");

        console.log("HERE");
      }}
    >
      <Input set={setUN} label="UserName" />
      <EmailAndPasswordFeild set={setCredentials} />
      <div className="text-white">
        <input
          onChange={(e) => {
            console.log(e.target.checked);
            sept([e.target.checked, e.target.checked ? "hidden" : ""]);
          }}
          name="paymet"
          type="checkbox"
          className="mr-4"
          id="accept"
        />
        Aceite os termos de Privacidade
      </div>
      <div className="">
        <div className=""></div>
        <Buttons label={"Registrar"} twClass="!bg-main" />
        <LinkButton url="" label="Não possui uma conta? Registe-se aqui" />
      </div>
    </form>
  );
}

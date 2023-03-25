import { useAuth } from "@/services/auth";
import { EmailAndPasswordFeild, Input } from "../utils/Fields";
import { useState } from "react";
import { toast } from "react-toastify";
import Buttons, { LinkButton } from "../utils/Buttons";
import { useRouter } from "next/router";

export default function RegisterForm({ onSubmit }) {
  const { user, register } = useAuth();
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: "",
    password: null,
    tel: 0,
  });
  const [username, setUN] = useState("");
  const [accept, sept] = useState([false, "hidden"]);
  const submit = () => {
    // if (accept[0]) {
    console.log(
      register(
        {
          email: credentials.email, //credentials.email,
          password: credentials.password, //credentials.password,
          provider: "local",
          tel: credentials.tel,
          username: username,
        },
        true
      )
    );
    // } else {
    //   sept([false, ""]);
    //   toast("Aceite os termos antes de continuar!");
    // }
  };
  return (
    <form
      className=" place-content-center p-10 gap-2 "
      onSubmit={(e) => {
        e.preventDefault();
        if (!credentials.password) {
          toast("O campo da senha esta vazia.");
        } else if (String(credentials.password).length < 6) {
          toast("A senha tem que conter no minimo 6 letras.");
        } else if (String(credentials.password).length >= 6) {
          submit();
        } else toast("Algo ocorreu errado");

      }}
    >
      <Buttons label="&#8592; Voltar" twClass="mt-[-32px] ml-[-42px] !bg-transparent absolute" />
      <div className="text-white text-center pb-12 text-3xl uppercase font-extrabold">
        <h1>Registre-se</h1>
      </div>
      <Input set={setUN} label="UserName" type="text" />
      <EmailAndPasswordFeild set={setCredentials} />
      {/* <div className="text-white">
        <input
          onChange={(e) => {
            console.log(e.target.checked);
            sept([e.target.checked, e.target.checked ? "hidden" : ""]);
          }}
          name="paymet"
          type="checkbox"
          className="mr-4 mb-6"
          id="accept"
        />
        Aceite os termos de Privacidade
      </div> */}
      <div className="text-center m">
        <Buttons label={"Registrar"} type="submit" twClass="!bg-main " />
      </div>
      <div className=" text-white text-center mt-6">
        <Buttons
          action={() => router.push("/login")}
          label="Não possui uma conta? Registe-se aqui"
        />
      </div>

    </form>
  );
}

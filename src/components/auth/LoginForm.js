import { useState } from "react";
import { EmailAndPasswordFeild } from "../utils/Fields";
import { useAuth } from "@/services/auth";
import Buttons, { LinkButton } from "../utils/Buttons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginForm({}) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const router = useRouter()
  const submit = () => {
    console.log(
      login(
        {
          identifier: credentials.email,
          password: credentials.password,
          provider: "local",
        },
        true
      )
    );
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
          console.log("HERE");
        }}
        className="grid place-content-center p-10 gap-2"
      >
         <Buttons label="&#8592; Voltar" twClass="mt-[-32px] ml-[-42px] !bg-transparent absolute" />
        <div className="">
          <div className=" text-white text-center pb-12 text-3xl uppercase font-extrabold">
            <h1>Login</h1>
          </div>
          <div className="">
            <EmailAndPasswordFeild set={setCredentials} />
          </div>
          <div className="text-center mb-6">
            <Buttons twClass="!bg-main" label="Login" type="submit" />
          </div>
          <div className=" text-white text-center">
            <Buttons

              action={()=>router.push("/register")}
              label="Não possui uma conta? Registe-se aqui"              
            />
          </div>
        </div>
      </form>
    </>
  );
}

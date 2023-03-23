import { useState } from "react";
import { EmailAndPasswordFeild } from "../utils/Fields";
import { useAuth } from "@/services/auth";
import Buttons from "../utils/Buttons";

export default function LoginForm({}) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = useAuth();
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
        console.log("HERE");
      }}
      className="grid place-content-center p-10 gap-2"
    >
      <div className="">
        <div className=" text-white text-center pb-12 text-3xl uppercase font-extrabold">
          <h1>Login</h1>
        </div>
        <div className="">
          <EmailAndPasswordFeild set={setCredentials} />
        </div>
        <Buttons twClass="!bg-main" label="Login" />
      </div>
    </form>
  );
}

import { useState } from "react";
import { EmailAndPasswordFeild } from "../utils/Fields";
import { useAuth } from "@/services/auth";
import Buttons from "../utils/Buttons";

export default function LoginForm({ }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
 const {login} = useAuth()
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
      <div className="form_register">
        <div className="div_input">
          <EmailAndPasswordFeild set={setCredentials} />
        </div>
        <Buttons twClass="text-white bg-red-600 w-16 h-8 rounded-full" label="Login" />
      </div>
    </form>
  );
}

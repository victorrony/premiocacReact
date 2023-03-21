import { useState } from "react";
import { EmailAndPasswordFeild } from "../utils/Fields";
import { useAuth } from "@/services/auth";

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
      className="grid place-content-center p-10 gap-4"
    >
      <div className="form_register">
        <div className="div_input">
          <EmailAndPasswordFeild set={setCredentials} />
        </div>
        <button className="btn btn-primary btn-block" type="submit">Login</button>
      </div>
    </form>
  );
}

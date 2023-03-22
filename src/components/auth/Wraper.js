import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Children } from "react";

export default function Wraper({ children }) {
  return (
    <div className="grid place-content-center grid-cols-3 h-screen">
      <div className="col-span-2 bg-white">
        <h1 className="text-xl font-bold underline">foto</h1>
      </div>
      <div className="bg-red-500">{children}</div>
    </div>
  );
}

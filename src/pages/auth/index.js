import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Auth() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <h1 className="text-xl font-bold underline">foto</h1>
      </div>
      <div>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

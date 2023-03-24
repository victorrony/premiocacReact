import LoginForm from "@/components/auth/LoginForm";
import Wraper from "@/components/auth/Wraper";
import { LinkButton } from "@/components/utils/Buttons";

export default function Login() {
  return (
    <Wraper>
      <LoginForm />      
    </Wraper>
  );
}

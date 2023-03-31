import Wraper from "@/components/auth/Wraper";
import Buttons from "@/components/utils/Buttons";
import { useRouter } from "next/router";

export default function Confirmed() {
  const router = useRouter()
  return (
    <Wraper>
      <div className="grid place-content-center p-10 gap-2">
        <div className="text-white text-center pb-12 text-3xl uppercase font-extrabold">
          <h1>Verifique seu email para authenticar sua conta </h1>
          <p>Verifique se Email nao caiu no span</p>
        </div>
        <Buttons action={()=>router.push("/")} label="&#8592; Voltar" twClass="mt-[-32px] ml-[-42px] !bg-transparent absolute" />
      </div>
    </Wraper>
  );
}

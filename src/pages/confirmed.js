import Wraper from "@/components/auth/Wraper";
import Buttons from "@/components/utils/Buttons";

export default function Confirmed() {
  return (
    <Wraper>
      <div className="grid place-content-center p-10 gap-2">
        <div className="text-white text-center pb-12 text-3xl uppercase font-extrabold">
          <h1>Verifique seu email para authenticar sua conta </h1>
        </div>
        <Buttons  label="Voltar" className="w-10 bg-black "/>
      </div>
    </Wraper>
  );
}

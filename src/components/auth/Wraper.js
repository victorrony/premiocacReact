import Image from "next/image";
import Link from "next/link";


export default function Wraper({ children }) {
  return (
    <div className="grid place-content-center  h-screen py-24 ">
      <Link href={"/"} passHref>
        <div className="z-50 left-10 top-5 absolute flex">        
          <Image src={"/other/logo.png"} width={100} height={60} alt="logo"/>             
        </div>
      </Link>
      <div className="bg-selected h-full md:h-auto">{children}</div>
    </div>
  );
}

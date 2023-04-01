import Buttons from "@/components/utils/Buttons";
import { useState } from "react";

export default function SectionGridCard({ title, description, i }) {
  const [expanded, setExpanded] = useState(false);


  /*function handleClick () {
    setExpanded(!expanded);
    console.log(handleClick)
  }*/

  return (
    <div
      className={`hover:h-full  w-full h-48 md:h-72 md:w-72 md:hover:h-full rounded-3xl p-2 flex justify-between flex-col ${
        i % 2 == 0 ? "bg-secondary" : "bg-selected"
      } `}
    >
      <h1
        className={`uppercase text-xl font-extrabold p-4 ${
          i % 2 == 0 ? "text-selected" : "text-main"
        }`}
      >
        {title}
      </h1>
      <p className=" text-ellipsis overflow-hidden  font-bold text-sm text-white p-2 ">{description}</p>
      <div>
        
        { /*<Buttons
          label={ expanded? "Ver Menus" : "Ver Mais"}
          action={()=> setExpanded}
          twClass={i % 2 != 0 ? "!bg-white p-4 !text-selected mt-2" : "mt-8"}
      /> */}
      </div>
    </div>
  );
}

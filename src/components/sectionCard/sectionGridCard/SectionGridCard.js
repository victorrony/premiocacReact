/*import Buttons from "@/components/utils/Buttons";
import { useState } from "react";*/

export default function SectionGridCard({ title, description, i }) {
  //const [expanded, setExpanded] = useState(false);


 /* function handleClick () {
    setExpanded(!expanded);
    console.log(handleClick)
  }*/

  return (
    <div
      className={`rounded-3xl expanded-full p-4 flex justify-between flex-col ${
        i % 2 == 0 ? "bg-secondary" : "bg-selected"
      } `}
    >
      <h1
        className={`uppercase text-xl font-extrabold p-2 ${
          i % 2 == 0 ? "text-selected" : "text-main"
        }`}
      >
        {title}
      </h1>
      <p className="font-bold text-sm text-white p-2 ">{description}</p>
      <div>
        {/* <Buttons
          label={ expanded? "Ver Menus" : "Ver Mais"}
          action={handleClick}
          twClass={i % 2 != 0 ? "!bg-white !text-selected mt-2" : "mt-8"}
      /> */}
      </div>
    </div>
  );
}

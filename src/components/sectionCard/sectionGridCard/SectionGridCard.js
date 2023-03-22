import Buttons from "@/components/utils/Buttons";

export default function SectionGridCard({ title, description, i }) {
  return (
    <div
      className={`rounded-3xl p-4 ${
        i % 2 == 0 ? "bg-secondary" : "bg-red-600"
      } `}
    >
      <h1
        className={`uppercase text-xl font-extrabold p-2 ${
          i % 2 == 0 ? "text-red-600" : "text-main"
        }`}
      >
        {title}
      </h1>
      <p className="font-bold text-sm text-white p-2 line-clamp-[9] ">
        {description}
      </p>
      <div>
        <Buttons
          label={"Ver Mais"}
          twClass={i % 2 != 0 ? "!bg-main !text-red-600" : ""}
        />
      </div>
    </div>
  );
}

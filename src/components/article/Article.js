import { CONTESTANTS } from "@/services/api/queries/contestants";
import { useApp } from "@/services/context";
import { useQuery } from "@apollo/client";
import ArticleGridCard from "./articleGridCard/ArticleGridCard";

export default function Article() {
  const { loading, error, data } = useQuery(CONTESTANTS);
  const {vote} = useApp();

  if (loading) return "Loading";
  if (error) return "Error";
  console.log(data);
  return (
    <div className="pb-24 m-auto w-[1130px] bg-main">
      <div className="m-auto text-[54px] my-14 font-bold text-center text-white">
        <h2>
          VOTE NO SEU MELHOR <br /> ATENDEDOR
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-14 p-6 rounded-[40px] bg-white">
        {data.contestants?.data.map((a, i) => (
          <ArticleGridCard
            vote={()=> vote(a.id)}
            key={i}
            name={a.attributes?.name}
            img={a.attributes.portrait?.data.attributes}
            description={a.attributes?.description}
          />
        ))}
      </div>
    </div>
  );
}

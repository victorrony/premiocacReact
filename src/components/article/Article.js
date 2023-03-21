
import { CONTESTANTS } from "@/services/api/mutations/queries/contestants";
import { useQuery } from "@apollo/client";
import ArticleGridCard from "./articleGridCard/ArticleGridCard";

export default function Article() {
  const { loading, error, data } = useQuery(CONTESTANTS);

  if (loading) return "Loading";
  if (error) return "EROR";
  console.log(data)
  return (
    <div className="article">
      <div className="article_p">
        <h2>
          VOTE NO SEU MELHOR <br /> ATENDEDOR
        </h2>
      </div>
      <div className="article_grid">
        {
          data.contestants?.data.map(
            (a,i) => <ArticleGridCard
              key={i}  
              name={a.attributes?.name} 
              img={a.attributes.portrait?.data.attributes}
              description={a.attributes?.description}
              />
          )
        }
      </div>
    </div>
  );
}

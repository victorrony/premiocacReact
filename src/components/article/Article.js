
import { CONTESTANTS } from "@/services/api/mutations/queries/contestants";
import { useQuery } from "@apollo/client";
import ArticleGridCard from "./articleGridCard/ArticleGridCard";

export default function Article() {
  const { loading, error, data } = useQuery(CONTESTANTS);

  if (loading) return "Loading";
  if (error) return "EROR";
  return (
    <div className="article">
      <div className="article_p">
        <h2>
          VOTE NO SEU MELHOR <br /> ATENDEDOR
        </h2>
      </div>
      <div className="article_grid">
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
        <ArticleGridCard />
      </div>
    </div>
  );
}

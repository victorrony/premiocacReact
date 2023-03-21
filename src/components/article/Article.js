

import ArticleGridCard from "./articleGridCard/ArticleGridCard";

export default function Article() {
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

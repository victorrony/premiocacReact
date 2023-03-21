import { useAuth } from "@/services/auth";

export default function ArticleGridCard({name,img,description,vote=()=>{}}) {
  const {user} = useAuth();
  return (
    <div className="article_grid_card">
      <img src={process.env.NEXT_PUBLIC_API + img.url} />
      <h1 className="article_grid_card_h1">{name}</h1>
      <h2 className="article_grid_card_h2">{description}</h2>
      {user?
      <button className="article_grid_btn" onClick={vote}>Votar</button>
      :
      <button className="article_grid_btn" onClick={()=> {
        window.location.href = "/login";
      }}>Logar Para Votar</button>
      }
      
    </div>
  );
}

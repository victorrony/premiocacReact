import { useAuth } from "@/services/auth";

export default function ArticleGridCard({
  name,
  img,
  description,
  vote = () => {},
}) {
  const { user } = useAuth();
  return (
    <div
      className="max-h-1/2 text-left rounded-3xl h-full"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API + img.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hover:bg-black/25 bg-black/50 p-4 rounded-3xl ease-in-out text-white">
        <h1 className="font-bold mt-24">{name}</h1>
        <h2 className="mb-2">{description}</h2>
        {user ? (
          <button
            className="font-extrabold min-w-24 px-4 h-8 bg-red-600 rounded-3xl"
            onClick={vote}
          >
            Votar
          </button>
        ) : (
          <button
            className="font-extrabold min-w-24 px-4 h-8 bg-red-600 rounded-3xl"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Logar Para Votar
          </button>
        )}
      </div>
    </div>
  );
}

import Buttons from "@/components/utils/Buttons";
import { useAuth } from "@/services/auth";
import { useRouter } from "next/router";

export default function ArticleGridCard({
  name,
  img,
  description,
  voted,
  vote,
}) {
  const { user } = useAuth();
  const router = useRouter();
  return (
    <div>
      <div>
      <h1 className=" mt-10 font-bold">{name}</h1>
      <h2 className="mb-1 text-xs ">{description}</h2>
      </div>
    <div
      className="max-h-1/2 text-left rounded-3xl h-64 "
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL + img.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-full">
      <div className="hover:bg-black/25 bg-black/50 p-4 h-full rounded-3xl ease-in-out text-white flex flex-col justify-end items-center ">
        {!vote ? (
          voted ? (
            <button
              disabled
              className="font-extrabold  min: w-24 px-4 h-8 bg-white text-black rounded-3xl "
            >
              VOTADO
            </button>
          ) : (
            <button className="h-8"></button>
          )
        ) : user ? (
          <Buttons label="Votar" action={vote} />
        ) : (
          <Buttons
            label="Login para Votar"
            twClass="text-xs  h-10 md:text-xs p-1 "
            action={() => router.push("/login")}
          />
        )}
      </div>
      </div>
    </div>
    </div>
  );
}

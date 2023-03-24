import { client } from "@/services/api";
import { CONTESTANTS } from "@/services/api/queries/contestants";
import { VOTED } from "@/services/api/queries/user";
import { useAuth } from "@/services/auth";
import { useApp } from "@/services/context";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ArticleGridCard from "./articleGridCard/ArticleGridCard";

export default function Article() {
  const { user } = useAuth();
  const [voted, setVoted] = useState(null);
  const { loading, error, data } = useQuery(CONTESTANTS);
  const {
    loading: voting,
    error: unvoted,
    data: votedd,
  } = useQuery(VOTED, {
   fetchPolicy:"no-cache", variables: {
      usersPermissionsUserId: user?.id,
    },
    onCompleted: (data) => {
      console.log("VOTED ID", data.usersPermissionsUser.data.attributes);
      if (data.usersPermissionsUser.data.attributes.voted) {
        setVoted({
          id: data.usersPermissionsUser.data.attributes.vote?.data.attributes
            .contestant.data.id,
        });
      }
    },
  });
  const { vote } = useApp();

  const load = () => {
    client.refetchQueries({
      include: [VOTED],
    });
  };

  useEffect(() => {
    load();
  }, [user]);

  if (loading) return "Loading";
  if (error) return "Error";
  console.log(data);
  return (
    <div className="pb-20 m-auto sm:w-full md:w-4xl bg-main">
      <div className="text-3xl md:leading-[4rem] md:text-[54px] mt-24 mb-8 md:my-14 font-bold text-center text-white">
        <h2>
          VOTE NO SEU MELHOR <br /> ATENDEDOR
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-[1130px] gap-14 p-6 rounded-[40px] mx-auto bg-white">
        {data.contestants?.data.map((a, i) => (
          <ArticleGridCard
            voted={voted?.id == a.id ? true : false}
            vote={voted && user ? null : () => vote(a.id, { load: load })}
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

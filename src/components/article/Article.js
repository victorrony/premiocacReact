import { client } from "@/services/api";
import { CONTESTANTS } from "@/services/api/queries/contestants";
import { VOTED } from "@/services/api/queries/user";
import { useAuth } from "@/services/auth";
import { useApp } from "@/services/context";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ArticleGridCard from "./articleGridCard/ArticleGridCard";
import Image from "next/image";

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
    <div className="pb-8 m-auto h-auto sm:w-full md:w-4xl bg-main">
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-full lg:grid-cols-4 lg:w-[1200px] gap-6 p-6 rounded-[40px] mx-auto bg-white">
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

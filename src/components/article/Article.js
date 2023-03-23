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
  const [getVoted] = useLazyQuery(VOTED);
  const { vote } = useApp();

  const load = () => {

    getVoted({
      variables: {
        usersPermissionsUserId: user?.id
      }, onCompleted: (data) => {
        console.log("VOTED ID", data.usersPermissionsUser.data.attributes)
        if (data.usersPermissionsUser.data.attributes.voted) {

          setVoted({ id: data.usersPermissionsUser.data.attributes.vote?.data.attributes.contestant.data.id });

        }
      }
    });
  }

  useEffect(() => {
    load();
  }, [user])

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
            voted={voted?.id == a.id ? true : false}
            vote={voted ? null : () => vote(a.id, { load: load })}
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

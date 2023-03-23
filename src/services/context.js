import { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { VOTE } from "./api/mutations/vote";
import { useAuth } from "./auth";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const { user } = useAuth();
  const [vt] = useMutation(VOTE);

  const vote = async (id,{load}) => {
    await vt({
      fetchPolicy: "no-cache",
      variables: {
        data: {
          contestant: id,
          voter: user.id,
        },
      },
      onCompleted: (data) => {
        toast("Sucesso ao votar");
        if(load) load();
      },
      onError: () => {
        toast("Nao Foi posivel Votar");
      },
    });
  };

  useEffect(() => {}, []);

  return <AppContext.Provider value={{ vote }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);

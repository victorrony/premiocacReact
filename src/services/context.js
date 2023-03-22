import {useState, useEffect, useContext, createContext} from 'react';
import {parseCookies} from 'nookies';
import {useRouter} from 'next/router';
import nookies from 'nookies';
import {toast} from 'react-toastify';
import { useMutation } from "@apollo/client";
import {LOGIN,REGISTER} from './api/mutations/user';
import { VOTE } from './api/mutations/vote';
import { useAuth } from './auth';

export const AppContext = createContext({});
export const AppProvider = ({children}) => {
    const {user} = useAuth()
    const [vt] = useMutation(VOTE);

  const vote = async (id) => {


     await vt({ variables: {data:{
        contestant: id,
        voter: user.id
     }},
    onCompleted:(data)=>{
    },
    onError:()=>{
      
    }
  });
 }

  useEffect(() => {

  }, []);

  return (<AppContext.Provider value={{vote}}>{children}</AppContext.Provider>)
}

export const useApp = () => useContext(AppContext);

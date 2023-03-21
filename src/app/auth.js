import {useState, useEffect, useContext, createContext} from 'react';
import {parseCookies} from 'nookies';
import {useRouter} from 'next/router';
import nookies from 'nookies';
import {toast} from 'react-toastify';
import { useMutation } from "@apollo/client";
import {LOGIN,REGISTER} from './api/mutations/user';

export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [reg] = useMutation(REGISTER);
  const [log] = useMutation(LOGIN);
  const router = useRouter();

  //The LocgoutFunction

  const logOut = async () => {
    try {
      nookies.destroy(null, 'login');
      localStorage.removeItem("token");
      setUser(null);
    } catch (e) {

    } finally {

    }
  }
  //
  const login = async (credentials,redirect) => {


     await log({ variables: { input: {
      identifier: credentials.identifier,
      password: credentials.password,
      provider: credentials.provider
    } },
    onCompleted:(data)=>{
      try {
        nookies.set(null,'jwt',data.login.jwt);
        nookies.set(null,'login',JSON.stringify(credentials));
        console.log("Nada de mais",data.login.jwt);
        localStorage.setItem("token", data.login.jwt);
        setUser(data.login.user);
        if(redirect) router.push('/');
        console.log(data);
      } catch (e) {
        return "Algo Ocoreu Errado: " + e;
      } finally {
        //
      }
    },
    onError:()=>{
      localStorage.removeItem("token");
      toast("Falha na autentificacao");
      setUser(null);
    }
  });
 }

 const register = async (credentials,redirect) => {

    await reg({ variables: { data: {
      //provider: credentials.provider,
      password:credentials.password,
      username: credentials.username,
      email: credentials.email,
      //phone: credentials.tel
   } },
   onCompleted:(data)=>{
     try {
       toast("Sucesso em Criar conta");
       log(
         {
           identifier:credentials.email,
           password:credentials.password,
           provider:"local"
         });
       console.log(data);
       router.push('/login');
       toast("Por favor faça Login");
     } catch (e) {
       return "Algo Ocoreu Errado: " + e;
     } finally {
       //
     }
   },
   onError:(err)=>{
     toast("Falha em Registrar");
     console.log(err);
     setUser(null);
   }
 });
}

  useEffect(async () => {

    const cookies = parseCookies();
    var c;

      try {

          c = await JSON.parse(cookies.login);
          console.log(c);
          //login(c);
          console.log(login(c));

      } catch (e) {
        console.log(e)
        setUser(null)

      } finally {

      }



    //nookies.set(undefined, 'jwt',c.data.login.jwt)
  }, []);

  return (<AuthContext.Provider value={{user,login,register,logOut}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);

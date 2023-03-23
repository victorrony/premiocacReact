import { useState, useEffect, useContext, createContext } from "react";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import nookies from "nookies";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { LOGIN, REGISTER } from "./api/mutations/user";
import { client } from "./api";
import { VOTED } from "./api/queries/user";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reg] = useMutation(REGISTER);
  const [log] = useMutation(LOGIN);
  const router = useRouter();

  //The LocgoutFunction

  const logOut = async () => {
    try {
      nookies.destroy(null, "login");
      localStorage.removeItem("token");
      setUser(null);
    } catch (e) {
    } finally {
      client.refetchQueries({
        include: [VOTED],
      });
    }
  };
  //
  const localLogin = (data,credentials) => {

    
          nookies.set(null, "jwt", data.login?.jwt || data.register?.jwt);
          nookies.set(null, "login", JSON.stringify(credentials));
          
          console.log("Nada de mais", data.login?.jwt);
          localStorage.setItem("token", data.login?.jwt || data.register?.jwt);
          
          setUser(data.login?.user || data.register?.jwt);
  }
  const login = async (credentials, redirect) => {
    await log({
      variables: {
        input: {
          identifier: credentials.identifier,
          password: credentials.password,
          provider: credentials.provider,
        },
      },
      onCompleted: (data) => {
        try {
          localLogin(data)
          if (redirect) router.push("/");
          console.log(data,credentials);
        } catch (e) {
          return "Algo Ocoreu Errado: " + e;
        } finally {
          //
        }
      },
      onError: () => {
        localStorage.removeItem("token");
        toast("Falha na autentificacao");
        setUser(null);
      },
    });
  };

  const register = async (credentials, redirect) => {
    await reg({
      variables: {
        input: {
          //provider: credentials.provider,
          password: credentials.password,
          username: credentials.username,
          email: credentials.email,
        },
      },
      onCompleted: (data) => {
        try {
          toast("Sucesso em Criar conta");
          localLogin(data,credentials);
          if (redirect) router.push("/");
          //toast("Por favor faça Login");
        } catch (e) {
          return "Algo Ocoreu Errado: " + e;
        } finally {
          //
        }
      },
      onError: (err) => {
        toast("Falha em Registrar");
        console.log(err);
        setUser(null);
      },
    });
  };

  useEffect(() => {
    const cookies = parseCookies();
    var c;

    try {
      c = JSON.parse(cookies.login);
      console.log(c);
      //login(c);
      login(c);
    } catch (e) {
      console.log(e);
      setUser(null);
    } finally {
    }

    //nookies.set(undefined, 'jwt',c.data.login.jwt)
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

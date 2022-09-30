import * as React from "react";
import { useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
const API_URL = "https://studapi.teachmeskills.by/auth/";

interface authContextType {
  user: any;
  userEmail: any;
  login: any;
  logout: any;
}

const authContextDefaultValues: authContextType = {
  user: null,
  userEmail: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext<authContextType>(
  authContextDefaultValues
);

interface IAuthProvider {
  children: any;
}

interface IAuthProvider {
  children: any;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = (email: string, password: string) => {
    return axios
      .post(API_URL + "jwt/create", {
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("access-token", response.data.access);
          localStorage.setItem("refresh-token", response.data.refresh);
          localStorage.setItem("email", email);
          setUser(response.data.access);
        }
        return response.data;
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const userEmail = localStorage.getItem("email");

  const value = useMemo(
    () => ({
      user,
      userEmail,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

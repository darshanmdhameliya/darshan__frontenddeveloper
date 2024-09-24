import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  const userAuthentication = async()=>{
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:3001/api/auth/user",{
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      });

      if(response.ok){
        const data = await response.json();
        setUser(data.userData)
        setIsLoading(false)
      }else{
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    userAuthentication();
  },[])

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, authorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};

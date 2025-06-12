import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./config";
import LoadingIcon from "./components/layout/LoadingIcon";

const GlobalProvider = createContext();

function GlobalContext({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${api}/auth/me`, {
          withCredentials: true,
        });
        setUser(result.data);
        console.log(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <GlobalProvider.Provider value={{ user, setUser, isLoading }}>
      {isLoading ? <LoadingIcon /> : <>{children}</>}
    </GlobalProvider.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalProvider);
}

export default GlobalContext;

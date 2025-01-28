"use client"
import { createContext,useContext,useState } from "react";



const AppContext = createContext();

export default function Provider({ children }) {
  const [language, setLanguage] = useState("");
  const [user, setUser] = useState();
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <AppContext.Provider value={{ language, setLanguage, user, setUser,isLoggedIn,setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};


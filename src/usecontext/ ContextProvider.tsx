// MyContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";

interface ContextData {
  buttonTexts: ButtonText[];
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setQuery: any;
  query: string;
 
}
type ButtonText = {
  text: string;
 
};

const MyContext = createContext<ContextData | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [username, setUsername] = useState<string>(""); // Valor inicial
  const [query, setQuery] = useState<string>("");
  // hook mostrar proyectos

  //  mapear el botón de proyectos
  const buttonTexts: ButtonText[] = [
    { text: "Perfil de estudiante" },
    { text: "tienda e-commerce digital" },
    { text: "mapa de transporte" },
    { text: "Plataforma de contenido" },
    { text: "Mi portafolio" },
  ];


  const contextValue: ContextData = {
    username,
    setUsername,
    buttonTexts,
    query,
    setQuery,
   
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
export const useThemeContext = () => {
  const context = useContext(MyContext);

  return context;
};

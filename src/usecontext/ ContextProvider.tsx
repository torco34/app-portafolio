// MyContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";
import { Hooks } from "../hook/Hooks";
interface ContextData {
  buttonTexts: ButtonText[];
  username: string;
  projectNames: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>> | undefined;
  setProjectNames: React.Dispatch<React.SetStateAction<string>> | undefined;
  selectedLanguage: any;
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
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Lenguaje");
  const [showText, setShowText] = useState<boolean>(false);
    const [projectNames, setProjectNames] = useState<string>("");
  // hook mostrar proyectos
  // const { setShow, show, setSelectedLanguage } = Hooks();
  //  mapear el botón de proyectos
  const buttonTexts: ButtonText[] = [
    { text: "Perfil de estudiante" },
    { text: "tienda e-commerce digital" },
    { text: "mapa de transporte" },
    { text: "Plataforma de contenido" },
    { text: "Mi portafolio" },
  ];
  // uso del modal

  const contextValue: ContextData = {
    username,
    setUsername,
    buttonTexts,
    query,
    setQuery,
    selectedLanguage,
    setSelectedLanguage,
    projectNames,
    setProjectNames,
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

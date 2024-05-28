// MyContext.tsx
import { createContext, useContext, ReactNode, useState } from "react";

interface ContextData {
  // buttonTexts: ButtonText[];
  // language: ButtonText[];
  // username: string;
  // showText: boolean;
  // showModal: boolean;
  // showComponent: boolean;
  // projectNames: string;
  // setUsername: React.Dispatch<React.SetStateAction<string>>;
  // setSelectedLanguage: React.Dispatch<React.SetStateAction<string>> | undefined;
  // setProjectNames: React.Dispatch<React.SetStateAction<string>> | undefined;
  // setShowText: React.Dispatch<React.SetStateAction<boolean>>;
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  // setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
  // selectedLanguage: any;
  // setQuery: any;
  // query: string;
}
// type ButtonText = {
//   text: string;
// };

const MyContext = createContext<ContextData | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [any, setAny] = useState<ContextData>();

  const contextValue: ContextData = { any, setAny };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
export const useThemeContext = () => {
  const context = useContext(MyContext);
  return context;
};

// MyContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';


interface ContextData {
    nombre: string
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setQuery: any;
    query: string;

}


const MyContext = createContext<ContextData | undefined>(undefined);


interface ContextProviderProps {
    children: ReactNode;

}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [username, setUsername] = useState<string>(''); // Valor inicial
    const [query, setQuery] = useState<string>('');
    const nombre = "torcoroma"
    const contextValue: ContextData = {
        username,
        setUsername,
        nombre,
        query,
        setQuery
    };

    return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

// Crear un hook personalizado para acceder al contexto
export const useThemeContext = () => {
    const context = useContext(MyContext);

    //   if (!context) {
    //     throw new Error('useMyContext debe ser utilizado dentro de un MyContextProvider');
    //   }

    return context;
};

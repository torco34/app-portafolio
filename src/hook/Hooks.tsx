import { useState } from "react";

export const Hooks = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [show, setShow] = useState<boolean>(false);
  // const [selectedText, setSelectedText] = useState<string | null>("");
  const [buttonText, setButtonText] = useState<string[] | null>([
    "Language",
    "Ingles",
    "Espanol",
  ]);
  const [showText, setShowText] = useState<boolean>(false);
  const [showLenguaje, setShowLenguaje] = useState<string | null>("");

  return {
    username,
    setUsername,
    
    show,
    setShow,
    showText,
    setShowText,
    buttonText,
    setButtonText,
    showLenguaje,
    setShowLenguaje,
  };
};

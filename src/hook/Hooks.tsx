import React, { useState } from 'react'

export const Hooks = () => {
  const [username, setUsername] = useState<string | undefined>(); 
    const [show, setShow] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string | null>("");
    const [buttonText, setButtonText] = useState<string | null>("Language");
    const [showText, setShowText] = useState<boolean>(true);
  return {
    username,
    setUsername,
    selectedText,
    setSelectedText,
    show,
    setShow,
    showText,
    setShowText,
    buttonText,
    setButtonText,
  };


}

import React, { useState } from 'react'

export const Hooks = () => {
  const [username, setUsername] = useState<string | undefined>(); 
    const [show, setShow] = useState<boolean>(false);
  const [selectedText, setSelectedText] = useState<string | null>("");
  return {
    username,
    setUsername,
    selectedText,
    setSelectedText,
    show,
    setShow,
  };


}

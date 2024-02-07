import React, { useState } from 'react'

export const Hooks = () => {
  const [username, setUsername] = useState<string | undefined>(); 
  
  const [selectedText, setSelectedText] = useState<string | null>(null);
  return { username, setUsername, selectedText, setSelectedText }


}

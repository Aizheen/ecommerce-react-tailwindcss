import React, { useState, createContext } from "react";

export const SidebarContext = createContext();
export default function SidebarProvider({ children }) {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);
  
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
}

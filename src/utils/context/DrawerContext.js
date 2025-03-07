import { createContext, useState } from "react";

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [showTopicsDrawer, setShowTopicsDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ showTopicsDrawer, setShowTopicsDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

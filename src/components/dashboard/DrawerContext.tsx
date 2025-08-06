"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

type DrawerContextProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const DrawerContext = createContext<DrawerContextProps>({
  isOpen: false,
  onOpenChange: () => {},
});

export const DrawerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, onOpenChange] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ isOpen, onOpenChange }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error("Elements must wrapped in DrawerContextProvider");
  return context;
};

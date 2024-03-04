import { FC, createContext, useState, useCallback } from "react";

export const CollapseToSelectBlocksIsOpenContext = createContext<{
  isOpen: boolean;
  toggleIsOpen: () => void;
}>({
  isOpen: false,
  toggleIsOpen: () => {},
});

export const CollapseToSelectBlocksIsOpenContextProvider: FC = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((p) => !p);
  }, []);

  return (
    <CollapseToSelectBlocksIsOpenContext.Provider
      value={{ isOpen, toggleIsOpen }}
    >
      {children}
    </CollapseToSelectBlocksIsOpenContext.Provider>
  );
};

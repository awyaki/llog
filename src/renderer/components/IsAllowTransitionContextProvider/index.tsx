import {
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
} from "react";

type IsAllowTransitionContextType = {
  isAllowTransition: boolean;
  setIsAllowTransition: Dispatch<SetStateAction<boolean>>;
  setConfirmerMessage: Dispatch<SetStateAction<string>>;
  confirmer: () => boolean;
};

export const IsAllowTransitionContext =
  createContext<IsAllowTransitionContextType>({
    isAllowTransition: true,
    setIsAllowTransition: () => {},
    confirmer: () => true,
    setConfirmerMessage: () => {},
  });

export const IsAllowTransitionContextProvider: FC = ({ children }) => {
  const [isAllowTransition, setIsAllowTransition] = useState(true);
  const [message, setConfirmerMessage] = useState("");

  const confirmer = useCallback(() => {
    return confirm(message);
  }, [message]);

  return (
    <IsAllowTransitionContext.Provider
      value={{
        isAllowTransition,
        setIsAllowTransition,
        confirmer,
        setConfirmerMessage,
      }}
    >
      {children}
    </IsAllowTransitionContext.Provider>
  );
};

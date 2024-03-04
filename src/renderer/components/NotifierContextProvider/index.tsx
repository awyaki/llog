import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";

type NotifierContextType = {
  isShow: boolean;
  message: string | undefined;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
};

export const NotifierContext = createContext<NotifierContextType>({
  isShow: false,
  message: "",
  setMessage: () => {},
});

export const NotifierContextProvider: FC = ({ children }) => {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const isShow = useMemo(() => {
    return message !== undefined;
  }, [message]);

  return (
    <NotifierContext.Provider value={{ isShow, message, setMessage }}>
      {children}
    </NotifierContext.Provider>
  );
};

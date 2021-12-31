import { FC, useState, createContext, Dispatch, SetStateAction } from 'react';

type NotificationMessageContextType = {
  message: string,
  setMessage: Dispatch<SetStateAction<string>>;
};

export const NotificationMessageContext = createContext<NotificationMessageContextType>({
  message: '',
  setMessage: () => {},
});


export const NotificationMessageContextProvider: FC = ({ children }) => {
  const [message, setMessage] = useState('');
  return (
    <NotificationMessageContext.Provider value={{ message, setMessage }}>
      {children}
    </NotificationMessageContext.Provider>
  );
};


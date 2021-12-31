import { FC, createContext, Dispatch } from 'react';

import { useNotification, Action } from './hooks';

type NotificationMessageContextType = {
  isShow: boolean;
  message: string;
  dispatch: Dispatch<Action>;
};

export const NotificationMessageContext = createContext<NotificationMessageContextType>({
  isShow: false,
  message: '',
  dispatch: () => {},
});


export const NotificationMessageContextProvider: FC = ({ children }) => {
  const [{ isShow, message }, dispatch] = useNotification();
  return (
    <NotificationMessageContext.Provider value={{ isShow, message, dispatch }}>
      {children}
    </NotificationMessageContext.Provider>
  );
};


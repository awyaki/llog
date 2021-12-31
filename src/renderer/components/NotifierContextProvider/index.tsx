import { FC, createContext, Dispatch } from 'react';

import { useNotification, Action } from './hooks';

type NotifierContextType = {
  isShow: boolean;
  message: string;
  dispatch: Dispatch<Action>;
};

export const NotifierContext = createContext<NotifierContextType>({
  isShow: false,
  message: '',
  dispatch: () => {},
});


export const NotifierContextProvider: FC = ({ children }) => {
  const [{ isShow, message }, dispatch] = useNotification();
  return (
    <NotifierContext.Provider value={{ isShow, message, dispatch }}>
      {children}
    </NotifierContext.Provider>
  );
};


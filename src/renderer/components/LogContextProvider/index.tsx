import { 
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction
  } from 'react';

import { LogWithRelation } from '~/components/type'

type ProvidedLogContext = {
  log: LogWithRelation | null;
  setLog: Dispatch<SetStateAction<LogWithRelation | null>>;
};

export const LogContext = createContext<ProvidedLogContext>({
  log: null,
  setLog: () => {},
});

export const LogContextProvider: FC = ({ children }) => {
  const [log, setLog] = useState<LogWithRelation | null>(null);
  return (
    <LogContext.Provider value={{ log, setLog }}>
      {children}
    </LogContext.Provider>
  ); 
};


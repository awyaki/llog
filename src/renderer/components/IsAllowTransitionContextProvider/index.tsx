import { 
  FC,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type IsAllowTransitionContextType = {
  isAllowTrasition: boolean;
  setIsAllowTrasition: Dispatch<SetStateAction<boolean>>;
};

export const IsAllowTransitionContext = createContext<IsAllowTransitionContextType>({ 
  isAllowTrasition: true,
  setIsAllowTrasition: () => {},
  });

export const IsAllowTransitionContextProvider: FC = ({ children }) => {
  const [isAllowTrasition, setIsAllowTrasition] = useState(true);
  return (
    <IsAllowTransitionContext.Provider value={{ isAllowTrasition, setIsAllowTrasition }}>
      {children}
    </IsAllowTransitionContext.Provider>
  );
};

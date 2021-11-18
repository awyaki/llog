import { createContext, FC, Dispatch } from 'react';
import { Action } from './hooks/useConditionList';
import { useConditionList } from './hooks/useConditionList';
import { Condition } from './types';

type Context = {
  conditionList: Condition[]; 
  dispatch: Dispatch<Action>;
};
const ConditionListStateContext = createContext<Context>({ conditionList: [], dispatch: () => {} });
const ConditionListProvider: FC = ({ children }) => {
  const [conditionList, dispatch] = useConditionList();
  return (
    <ConditionListStateContext.Provider value={{ conditionList: conditionList, dispatch: dispatch }}>
      {children}
    </ConditionListStateContext.Provider>
  );
};

export { ConditionListStateContext, ConditionListProvider };

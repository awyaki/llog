import { VFC, Dispatch } from 'react';

import { VStack } from '@chakra-ui/react';

import { Condition } from '~/pages/NotesOfContent/types';
import { Action } from '~/pages/NotesOfContent/hooks/useConditions'

import { ConditionItem } from './components/ConditionItem';

type Props = {
  conditionList: Condition[];
  dispatch: Dispatch<Action>;
};

export const ConditionList: VFC<Props> = ({ conditionList, dispatch }) => {
  return (
    <VStack>
      {conditionList.map((condition) => <ConditionItem 
                                          key={condition.id} 
                                          condition={condition}
                                          dispatch={dispatch}
                                          />)}
    </VStack>
  );
};

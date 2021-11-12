import { VFC } from 'react';

import { container } from './style/container';

import { CreateConditionButtonIcon } from './components/CreateConditionButtonIcon';

export const CreateConditionButton: VFC = () => {
  return ( 
    <button css={container}>
      <CreateConditionButtonIcon />
    </button>
  );
};

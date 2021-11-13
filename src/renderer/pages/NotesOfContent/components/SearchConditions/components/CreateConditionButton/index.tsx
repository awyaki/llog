import { VFC, MouseEventHandler } from 'react';

import { container } from './style/container';

import { CreateConditionButtonIcon } from './components/CreateConditionButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const CreateConditionButton: VFC<Props> = ({ onClick }) => {
  return ( 
    <button css={container} onClick={onClick}>
      <CreateConditionButtonIcon />
    </button>
  );
};

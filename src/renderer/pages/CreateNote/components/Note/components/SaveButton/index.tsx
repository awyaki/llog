import { VFC, MouseEventHandler } from 'react';

import { SaveButtonIcon } from './components/SaveButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const SaveButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <SaveButtonIcon />
    </button>
  );
};

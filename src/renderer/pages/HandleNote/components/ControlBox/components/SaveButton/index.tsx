import { VFC, MouseEventHandler } from 'react';

import { SaveButtonIcon } from './components/SaveButtonIcon';

type Props = {
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const SaveButton: VFC<Props> = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <SaveButtonIcon disabled={disabled} />
    </button>
  );
};

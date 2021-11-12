import { VFC, MouseEventHandler } from 'react';

import { CloseButtonIcon } from './components/CloseButtonIcon';

type Props = { 
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CloseButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <CloseButtonIcon />
    </button>
  );
};

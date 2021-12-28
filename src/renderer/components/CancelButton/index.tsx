import { VFC, MouseEventHandler } from 'react';

import { CancelIcon } from './components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CancelButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <CancelIcon />
    </button>
  );
};

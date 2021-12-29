import { VFC, MouseEventHandler } from 'react';

import { DeleteIcon } from './components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <DeleteIcon />
    </button>
  );
};

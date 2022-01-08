import { VFC, MouseEventHandler } from 'react';

import { EditIcon } from './components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditSelectedButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <EditIcon />
    </button>
  );
};

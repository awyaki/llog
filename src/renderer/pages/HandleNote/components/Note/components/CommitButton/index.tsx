import { VFC, MouseEventHandler } from 'react';
import { CommitButtonIcon } from './components/CommitButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CommitButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <CommitButtonIcon />
    </button>
  );
};

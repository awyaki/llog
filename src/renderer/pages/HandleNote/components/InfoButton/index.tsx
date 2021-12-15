import { VFC, MouseEventHandler } from 'react';
import { InfoButtonIcon } from './components/InfoButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const InfoButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <InfoButtonIcon />
    </button>
  );
};


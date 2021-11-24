import { VFC, MouseEventHandler } from 'react';
import { CreateContentIcon } from './components/CreateContentIcon';

type Props = {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CreateContentButton: VFC<Props> = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      <CreateContentIcon active={active} />
    </button>
  );
};

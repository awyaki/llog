import { VFC } from 'react';
import { CreateContentIcon } from './components/CreateContentIcon';

type Props = {
  active: boolean;
};

export const CreateContentButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <CreateContentIcon active={active} />
    </button>
  );
};

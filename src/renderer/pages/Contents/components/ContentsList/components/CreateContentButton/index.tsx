import { VFC } from 'react';
import { CreateContentIcon } from './components/CreateContentIcon';

type Props = {
  disable: boolean;
};

export const CreateContentButton: VFC<Props> = ({ disable }) => {
  return (
    <button>
      <CreateContentIcon disable={disable} />
    </button>
  );
};

import { VFC } from 'react';
import { SearchContentsIcon } from './components/SearchContentsIcon';
type Props = {
  active: boolean;
};
export const SearchContentsButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <SearchContentsIcon active={active} />
    </button>
  );
};


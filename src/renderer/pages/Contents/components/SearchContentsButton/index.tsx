import { VFC, MouseEventHandler } from 'react';
import { SearchContentsIcon } from './components/SearchContentsIcon';
type Props = {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export const SearchContentsButton: VFC<Props> = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      <SearchContentsIcon active={active} />
    </button>
  );
};


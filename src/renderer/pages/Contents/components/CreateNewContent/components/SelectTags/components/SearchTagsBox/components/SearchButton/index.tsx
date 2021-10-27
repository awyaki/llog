import { VFC, MouseEventHandler } from 'react';

import { SearchIcon } from './components/SearchIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const SearchButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <SearchIcon />
    </button>
  );
};

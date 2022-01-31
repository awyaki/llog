import { VFC, useContext } from 'react';

import { colors } from '~/styleConfig';

import { 
  SelectedTagsContext,
  SearchIcon
  } from '~/components';

export const SearchInput: VFC = () => {

  const { 
    searchQuery,
    setSearchQueryAction,
    } = useContext(SelectedTagsContext);

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQueryAction(e.target.value)}
        css={{
            width: '200px',
            borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          }}
          type="text" />
      <SearchIcon />
    </div>
  );
};

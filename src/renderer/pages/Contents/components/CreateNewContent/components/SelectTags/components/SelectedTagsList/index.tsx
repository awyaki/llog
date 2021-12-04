import { VFC, useContext } from 'react';

import { SelectedTagsContext } from '~/pages/Contents/components/CreateNewContent/SelectedTagsContextProvider';


import { Tag } from './Tag';
import { tagsList } from './style/tagsList';


export const SelectedTagsList: VFC = () => {
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <ul css={tagsList}>
      {selectedTags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
}; 

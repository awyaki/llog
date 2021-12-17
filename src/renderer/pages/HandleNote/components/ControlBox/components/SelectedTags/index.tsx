import { VFC, useContext, useEffect } from 'react';

import { Tag as TagType } from '@prisma/client';

import { SelectedTagsContext } from '~/pages/HandleNote/SelectedTagsContextProvider';

import { Box, CSSObject } from '@chakra-ui/react';


import { container } from './style/container';

import { Tag } from './components/Tag'
import { EditTagsButton } from './components/EditTagsButton';

type Props = {
  defaultTags: TagType[];
  onOpenSelectTags: () => void;
} & CSSObject;

export const SelectedTags: VFC<Props> = ({ defaultTags, onOpenSelectTags, ...CSSObject }) => {
  const { selectedTags, dispatch } = useContext(SelectedTagsContext);
  
  useEffect(() => {
    dispatch({ type: 'SELECTED_TAGS/CONCAT', tags: defaultTags });
  }, [defaultTags]);

  return (
    <Box __css={{ ...CSSObject }}>
      <ul css={container}>
        {selectedTags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
        <li><EditTagsButton onClick={onOpenSelectTags} /></li>
      </ul>
    </Box>
  );
};

import { VFC, useContext } from 'react';

import { SelectedTagsContext } from '~/pages/HandleNote/SelectedTagsContextProvider';

import { Box, CSSObject } from '@chakra-ui/react';


import { container } from './style/container';

import { Tag } from './components/Tag'
import { EditTagsButton } from './components/EditTagsButton';

type Props = {
  onOpenSelectTags: () => void;
} & CSSObject;

export const SelectedTags: VFC<Props> = ({ onOpenSelectTags, ...CSSObject }) => {
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <Box __css={{ ...CSSObject }}>
      <ul css={container}>
        {selectedTags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
        <li><EditTagsButton onClick={onOpenSelectTags} /></li>
      </ul>
    </Box>
  );
};

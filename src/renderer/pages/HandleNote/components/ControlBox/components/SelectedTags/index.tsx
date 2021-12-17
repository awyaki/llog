import { VFC } from 'react';

import { Box, CSSObject } from '@chakra-ui/react';

import { Tag as TagType } from '@prisma/client';

import { container } from './style/container';

import { Tag } from './components/Tag'
import { EditTagsButton } from './components/EditTagsButton';

type Props = {
  tags: TagType[];
  onOpenSelectTags: () => void;
} & CSSObject;

export const SelectedTags: VFC<Props> = ({ tags, onOpenSelectTags, ...CSSObject }) => {
  return (
    <Box __css={{ ...CSSObject }}>
      <ul css={container}>
        {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
        <li><EditTagsButton onClick={onOpenSelectTags} /></li>
      </ul>
    </Box>
  );
};

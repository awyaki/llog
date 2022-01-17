import { VFC } from 'react';

import { Icon } from '@chakra-ui/react';

import { MdPlayArrow } from 'react-icons/md';

import { colors } from '~/styleConfig';

import { container } from './style';

export const PreviewNoteIcon: VFC = () => {
  return (
    <Icon
      css={container}
      as={MdPlayArrow}
      w={4}
      h={4}
      color={colors.cyan.DEFAULT} />
  );
};

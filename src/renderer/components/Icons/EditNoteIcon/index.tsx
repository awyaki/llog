import { Icon } from '@chakra-ui/react';
import { MdOutlineEditNote } from 'react-icons/md';

import { container } from './style';

import { colors } from '~/styleConfig';

export const EditNoteIcon = () => {
  return (
    <Icon
      css={container}
      as={MdOutlineEditNote}
      w={4}
      h={4}
      color={colors.cyan.DEFAULT}
    />
  );
};

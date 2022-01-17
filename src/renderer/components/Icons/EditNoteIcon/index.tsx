import { VFC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdOutlineEditNote } from 'react-icons/md';

import { makeContainer } from './style';

import { colors } from '~/styleConfig';

type Props = {
  size: 'large' | 'small';
};

export const EditNoteIcon: VFC<Props> = ({ size }) => {
  const n = size === 'large' ? 8 : 4;
  return (
    <Icon
      css={makeContainer(size)}
      as={MdOutlineEditNote}
      w={n}
      h={n}
      color={colors.cyan.DEFAULT}
    />
  );
};

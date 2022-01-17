import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { makeCirlceContainer } from '../style';

import { MdOutlineDescription } from 'react-icons/md';

import { Icon } from '@chakra-ui/react';

type Props = {
  size: 'large' | 'small';
};

export const NotesIcon: VFC<Props> = ({ size }) => {
  const n = size === 'large' ? 8 : 4;
  return (
    <Icon 
      css={makeCirlceContainer(size)}
      as={MdOutlineDescription}
      w={n}
      h={n}
      color={colors.cyan.DEFAULT}
    />
  );
};

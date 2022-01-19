import { VFC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdKeyboardReturn } from 'react-icons/md';

import { makeCirlceContainer } from '../style';

import { colors } from '~/styleConfig';

type Props = {
  size: 'large' | 'small';
};

export const CommitIcon: VFC<Props> = ({ size }) => {
  const n = size === 'large' ? 8 : 4;
  return (
    <Icon
      css={makeCirlceContainer(size)}
      as={MdKeyboardReturn}
      w={n}
      h={n}
      color={colors.cyan.DEFAULT}
    />
  );
};

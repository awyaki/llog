import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { MdSearch } from 'react-icons/md';

import { Icon } from '@chakra-ui/react';

type Props = {
  color?: string;
};

export const EditIcon: VFC<Props> = ({ color }) => {
  return (
    <Icon
      as={MdSearch}
      w={4}
      h={4}
      color={color ?? colors.cyan.DEFAULT}
    />
  );
};

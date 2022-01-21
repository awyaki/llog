import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { MdEdit } from 'react-icons/md';

import { Icon } from '@chakra-ui/react';

export const EditIcon: VFC = () => {
  return (
    <Icon
      as={MdEdit}
      w={4}
      h={4}
      color={colors.cyan.DEFAULT}
    />
  );
};

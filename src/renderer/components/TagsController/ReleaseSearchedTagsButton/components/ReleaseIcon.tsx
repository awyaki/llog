import { VFC } from 'react';
import { Icon } from '@chakra-ui/react';
import { MdClose  } from 'react-icons/md';

import { colors } from '~/styleConfig';

export const ReleaseIcon: VFC = () => {
  return <Icon as={MdClose} w={4} h={4} color={colors.text} />;
};

import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdHome } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const HomeIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdHome} {...rest} />
  );
};

import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdArrowForward } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const ForwardIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdArrowForward} {...rest} />
  );
};

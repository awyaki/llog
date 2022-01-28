import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdKeyboardReturn } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const CommitIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdKeyboardReturn} {...rest} />
  );
};

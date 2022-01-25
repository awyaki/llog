import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdEditNote } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const InfoIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdEditNote} {...rest} />
  );
};

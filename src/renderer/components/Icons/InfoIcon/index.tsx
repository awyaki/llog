import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { IoMdInformation } from 'react-icons/io';

type Props = {
  css?: CSSObject;
};

export const InfoIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={IoMdInformation} {...rest} />
  );
};

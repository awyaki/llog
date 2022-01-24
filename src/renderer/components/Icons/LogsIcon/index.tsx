import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdViewList } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const LogsIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdViewList} {...rest} />
  );
};

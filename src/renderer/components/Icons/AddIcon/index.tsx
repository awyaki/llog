import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdAdd } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const AddIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdAdd} {...rest} />
  );
};

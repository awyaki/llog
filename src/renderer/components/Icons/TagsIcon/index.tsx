import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdTag } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const TagsIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdTag} {...rest} />
  );
};

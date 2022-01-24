import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { MdSearch } from 'react-icons/md';

import { Icon } from '@chakra-ui/react';

type Props = {
  css?: CSSObject;
};

export const SearchIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon
      as={MdSearch}
      {...rest}
    />
  );
};

import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Icon } from '@chakra-ui/react';

import { MdSettings } from 'react-icons/md';

type Props = {
  css?: CSSObject;
};

export const SettingsIcon: VFC<Props> = ({ ...rest }) => {
  return (
    <Icon 
    as={MdSettings} {...rest} />
  );
};

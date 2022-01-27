import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  InfoIcon,
  MenuButtonWrapper
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const InfoButton: VFC<Props> = ({ 
  onClick, 
  ...rest
}) => {
  return (
    <MenuButtonWrapper onClick={onClick} {...rest}>
      <InfoIcon />
    </MenuButtonWrapper>
  );
};

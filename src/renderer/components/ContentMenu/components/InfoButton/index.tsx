import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  InfoIcon,
  MenuButtonWithText
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const InfoButton: VFC<Props> = ({ 
  onClick, 
}) => {
  return (
    <MenuButtonWithText 
      Icon={InfoIcon}
      text="Info." 
      onClick={onClick}/>
  );
};

import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  InfoIcon,
  ContentMenuButtonWithText
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const InfoButton: VFC<Props> = ({ 
  onClick, 
}) => {
  return (
    <ContentMenuButtonWithText
      Icon={InfoIcon}
      text="Info." 
      onClick={onClick}/>
  );
};

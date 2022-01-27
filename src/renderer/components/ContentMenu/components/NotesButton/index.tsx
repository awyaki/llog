import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  NotesIcon,
  MenuButtonWrapper
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const NotesButton: VFC<Props> = ({ 
  onClick, 
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      secondary
      onClick={onClick}
      {...rest}>
      <NotesIcon />
    </MenuButtonWrapper>
  );
};

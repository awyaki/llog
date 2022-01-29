import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  NotesIcon,
  MenuButtonWithText,
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const NotesButton: VFC<Props> = ({ 
  onClick, 
}) => {
  return (
    <MenuButtonWithText 
      Icon={NotesIcon}
      text="Notes"
      onClick={onClick} />
  );
};

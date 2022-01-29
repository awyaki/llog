import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  EditNoteIcon,
  MenuButtonWithText
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const EditNoteButton: VFC<Props> = ({ 
  onClick, 
}) => {
  return (
    <MenuButtonWithText 
      Icon={EditNoteIcon}
      text="Write"
      onClick={onClick} /> 
  );
};

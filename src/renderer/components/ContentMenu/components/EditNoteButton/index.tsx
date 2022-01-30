import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  EditNoteIcon,
  ContentMenuButtonWithText
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const EditNoteButton: VFC<Props> = ({ 
  onClick, 
}) => {
  return (
    <ContentMenuButtonWithText 
      Icon={EditNoteIcon}
      text="Write"
      onClick={onClick} /> 
  );
};

import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  EditNoteIcon,
  MenuButtonWrapper
} from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const EditNoteButton: VFC<Props> = ({ 
  onClick, 
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      secondary
      onClick={onClick}
      {...rest}>
      <EditNoteIcon />
    </MenuButtonWrapper>
  );
};

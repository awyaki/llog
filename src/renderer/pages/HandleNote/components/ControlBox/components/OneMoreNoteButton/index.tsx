import { VFC, MouseEventHandler } from 'react';

import {
  NoteAddIcon,
  DisabableButtonAnimationWrapper
} from '~/components';

type Props = {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const OneMoreNoteButton: VFC<Props> = ({ disabled, onClick }) => {
  return (
    <DisabableButtonAnimationWrapper
      disabled={disabled}
      onClick={onClick}>
      <NoteAddIcon />
    </DisabableButtonAnimationWrapper>
  );
};

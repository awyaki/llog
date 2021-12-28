import { VFC, MouseEventHandler } from 'react';

import { 
  CommitButton, 
  ShowNoteButton,
  EditNoteButton,
  CancelButton,
  } from '~/components';

import { HStack } from '@chakra-ui/react';

type Props = {
  onClickCommit: MouseEventHandler<HTMLButtonElement>;
  onClickShowNote: MouseEventHandler<HTMLButtonElement>;
  onClickEditNote: MouseEventHandler<HTMLButtonElement>;
  onClickCancel: MouseEventHandler<HTMLButtonElement>;
};

export const ControlButtons: VFC<Props> = ({
  onClickCancel,
  onClickEditNote,
  onClickShowNote,
  onClickCommit
}) => {
  return (
    <HStack>
      <CommitButton onClick={onClickCommit} />
      <ShowNoteButton onClick={onClickShowNote} />
      <EditNoteButton onClick={onClickEditNote} />
      <CancelButton onClick={onClickCancel} />
    </HStack>
  );
};

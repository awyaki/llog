import { VFC, MouseEventHandler } from "react";

import {
  CommitButton,
  ShowNoteButton,
  EditNoteButton,
  CancelButton,
} from "~/components";

import { HStack } from "@chakra-ui/react";

type Props = {
  onClickCommit?: MouseEventHandler<HTMLButtonElement>;
  onClickShowNote?: MouseEventHandler<HTMLButtonElement>;
  onClickEditNote?: MouseEventHandler<HTMLButtonElement>;
  onClickDelete?: MouseEventHandler<HTMLButtonElement>;
};

export const ControlButtons: VFC<Props> = ({
  onClickDelete,
  onClickEditNote,
  onClickShowNote,
  onClickCommit,
}) => {
  return (
    <HStack>
      {onClickCommit ? <CommitButton onClick={onClickCommit} /> : undefined}
      {onClickShowNote ? (
        <ShowNoteButton onClick={onClickShowNote} />
      ) : undefined}
      {onClickEditNote ? (
        <EditNoteButton onClick={onClickEditNote} />
      ) : undefined}
      {onClickDelete ? <CancelButton onClick={onClickDelete} /> : undefined}
    </HStack>
  );
};

import { VFC, useContext } from "react";

import { CSSObject } from "@emotion/react";

import { Mode } from "../../types";

import {
  SelectedTagsList,
  ExpandButton as ExpandAddTagsButton,
  TagsList,
  SelectedTagsForHandleNoteContext,
} from "~/components";

import {
  SaveButton,
  CommitButton,
  OneMoreNoteButton,
  SelectedBlocks,
  SwitchEdit,
  NoteStateIndicator,
} from "./components";

import { ExpandAllBlocksButton } from "../SelectBlocks";

type Props = {
  css?: CSSObject;
  mode: Mode;
  updatedAt: Date | undefined;
  toggleEditBeteewnPreview: () => void;
  onOpenSelectBlocks: () => void;
  isNoteChange: boolean;
  isNoteExist: boolean;
  onCreateNote: () => void;
  onUpdateNote: () => void;
  onOpenModalToSubmitLog: () => void;
  onMoveToOtherNoteEdit: () => void;
  isOpenSelectTgsCollapse: boolean;
  toggleIsOpenSelectTagsCollapse: () => void;
};

export const ControlBox: VFC<Props> = ({
  mode,
  updatedAt,
  toggleEditBeteewnPreview,
  onOpenSelectBlocks,
  isNoteChange,
  isNoteExist,
  onCreateNote,
  onUpdateNote,
  onOpenModalToSubmitLog,
  onMoveToOtherNoteEdit,
  isOpenSelectTgsCollapse,
  toggleIsOpenSelectTagsCollapse,
  ...rest
}) => {
  const { selectedTagsForHandleNote } = useContext(
    SelectedTagsForHandleNoteContext,
  );

  return (
    <div
      css={{
        minWidth: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
      {...rest}
    >
      <NoteStateIndicator
        css={{ marginBottom: "16px" }}
        isNoteExist={isNoteExist}
        isNoteChange={isNoteChange}
        updatedAt={updatedAt}
      />
      <ExpandAddTagsButton
        isOpen={isOpenSelectTgsCollapse}
        toggleIsOpen={toggleIsOpenSelectTagsCollapse}
        css={{ marginBottom: "8px" }}
      />
      <TagsList
        css={{ marginBottom: "16px" }}
        tags={selectedTagsForHandleNote}
      />
      <ExpandAllBlocksButton css={{ marginBottom: "8px" }} />
      <SelectedBlocks
        css={{ marginBottom: "16px" }}
        onOpenSelectBlocks={onOpenSelectBlocks}
      />
      <SwitchEdit
        css={{ marginBottom: "16px" }}
        isEdit={mode === "edit"}
        onClick={toggleEditBeteewnPreview}
      />
      <CommitButton
        css={{ marginBottom: "8px" }}
        onClick={onOpenModalToSubmitLog}
      />
      <SaveButton
        css={{ marginBottom: "8px" }}
        onClick={isNoteExist ? onUpdateNote : onCreateNote}
        disabled={!isNoteChange}
      />
      <OneMoreNoteButton
        disabled={isNoteChange || !isNoteExist}
        onClick={onMoveToOtherNoteEdit}
      />
    </div>
  );
};

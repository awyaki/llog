import { VFC, useState, ChangeEventHandler, useCallback } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { useEditNote } from "./hooks";

import { CollapseToSelectTags, ModalToSubmitLog } from "~/components";

import { pageTitle } from "~/pages/style";

import { Note, ControlBox, CollapseToSelectBlocks } from "./components";

import { ContentWithRelation } from "~/pages/type";

type Props = {
  content: ContentWithRelation;
};

export const CreateNote: VFC<Props> = ({ content }) => {
  const {
    note,
    mode,
    markdown,
    selectedTags,
    setSelectedTags,
    toggleSelectedTagsForHandleNote,
    setMarkdown,
    isNoteChange,
    onOpenSelectBlocks,
    onCreateNote,
    onUpdateNote,
    onCommitLog,
    isNoteExist,
    onMoveToOtherNoteEdit,
    toggleEditBetweenPreview,
  } = useEditNote(content);

  const {
    isOpen: isOpenModalToSubmitLog,
    onClose: onCloseModalToSubmitLog,
    onOpen: onOpenModalToSubmitLog,
  } = useDisclosure();

  const [searchQuery, setSearchQuery] = useState("");

  const [isOpenSelectTgsCollapse, setIsOpenSelectTagsCollapse] =
    useState(false);

  const onChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleIsOpenSelectTagsCollapse = useCallback(() => {
    setIsOpenSelectTagsCollapse((p) => !p);
  }, []);

  return (
    <>
      <ModalToSubmitLog
        onSubmitLog={onCommitLog}
        isOpen={isOpenModalToSubmitLog}
        onClose={onCloseModalToSubmitLog}
      />
      <h2 css={{ ...pageTitle, marginBottom: "16px" }}>{content.name}</h2>
      <CollapseToSelectTags
        isOpen={isOpenSelectTgsCollapse}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        onToggleSelectedTags={toggleSelectedTagsForHandleNote}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
      />
      <CollapseToSelectBlocks blocks={content.blocks} />
      <div
        css={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Note
          css={{
            width: "calc(100% - 200px)",
            maxWidth: "830px",
            marginRight: "32px",
          }}
          mode={mode}
          markdown={markdown}
          setMarkdown={setMarkdown}
        />
        <ControlBox
          css={{ width: "200px", position: "sticky", top: "104px" }}
          updatedAt={note?.updatedAt}
          mode={mode}
          toggleEditBeteewnPreview={toggleEditBetweenPreview}
          isOpenSelectTgsCollapse={isOpenSelectTgsCollapse}
          toggleIsOpenSelectTagsCollapse={toggleIsOpenSelectTagsCollapse}
          onOpenSelectBlocks={onOpenSelectBlocks}
          isNoteChange={isNoteChange}
          isNoteExist={isNoteExist}
          onUpdateNote={onUpdateNote}
          onCreateNote={onCreateNote}
          onOpenModalToSubmitLog={onOpenModalToSubmitLog}
          onMoveToOtherNoteEdit={onMoveToOtherNoteEdit}
        />
      </div>
    </>
  );
};

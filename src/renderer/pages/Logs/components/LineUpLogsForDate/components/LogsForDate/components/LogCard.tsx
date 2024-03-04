import { VFC, useState, useContext, useCallback } from "react";

import { CSSObject } from "@emotion/react";

import { Tag } from "@prisma/client";

import { useHistory } from "react-router-dom";

import { colors, font } from "~/styleConfig";

import { makeFormalTimeString } from "~/utils";

import { LogWithRelation } from "~/pages/type";

import { Collapse } from "@chakra-ui/transition";

import {
  MiniBlockList,
  BlockList,
  NormalButton,
  SquareButton,
  CommitIcon,
  EditNoteIcon,
  ModalToSubmitLogContext,
  ModalToUpdateLogTitleContext,
  LogContext,
  MarkdownForHandleNoteContext,
  SelectedBlocksForHandleNoteContext,
  SelectedTagsContext,
} from "~/components";

import "zenn-content-css";

import { motion } from "framer-motion";

type LogCardProps = {
  log: LogWithRelation;
};

type TagListOfLogCardProps = {
  css?: CSSObject;
  tags: Tag[];
};

const TagListOfLogCard: VFC<TagListOfLogCardProps> = ({ tags, ...rest }) => {
  return (
    <ul
      css={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        "> li": {
          marginRight: "4px",
          marginBottom: "4px",
        },
      }}
      {...rest}
    >
      {tags.map(({ id, name }) => (
        <li
          css={{
            minWidth: "80px",
            textAlign: "center",
            fontSize: font.size.SS,
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: colors.cyan.DEFAULT,
            backgroundColor: colors.cyan.BACKGROUND,
            color: colors.cyan.DEFAULT,
            padding: "2px 4px",
          }}
          key={id}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export const LogCard: VFC<LogCardProps> = ({ log }) => {
  const {
    title,
    markdown,
    html,
    contentName,
    tags,
    blocks,
    createdAt,
    contentId,
  } = log;

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOopen = () => setIsOpen((prev) => !prev);

  const { setLog } = useContext(LogContext);

  const history = useHistory();
  const { dispatch: dispatchBlocksAction } = useContext(
    SelectedBlocksForHandleNoteContext,
  );
  const { setMarkdown } = useContext(MarkdownForHandleNoteContext);
  const { setSelectedTags } = useContext(SelectedTagsContext);

  const onCreateNewNoteFromTheLog = useCallback(() => {
    setMarkdown(markdown);
    dispatchBlocksAction({ type: "SELECTED_BLOCKS/SET", blocks: blocks });
    setSelectedTags(tags);
    history.push(`/content/${contentId}/createnote`);
  }, [history, blocks, markdown, tags]);

  const { onOpen: onOpenModalToSubmit } = useContext(ModalToSubmitLogContext);

  const onOpenModalToSubmitWithSetLog = () => {
    onOpenModalToSubmit();
    setLog(log);
  };

  const { setTitle, onOpen: onOpenModalToUpdate } = useContext(
    ModalToUpdateLogTitleContext,
  );

  const onOpenModalToUpdateWithSetLog = () => {
    onOpenModalToUpdate();
    setTitle(log.title);
    setLog(log);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.01 }}
        onClick={toggleIsOopen}
        style={{
          width: "100%",
          borderLeftWidth: "8px",
          borderStyle: "solid",
          padding: "16px",
          backgroundColor: colors.cyan.BACKGROUND,
          borderColor: colors.cyan.DEFAULT,
          color: colors.text,
          zIndex: 1,
        }}
      >
        <div
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div css={{ width: "90%" }}>
            <div
              css={{
                fontSize: font.size.SS,
                marginBottom: "8px",
              }}
            >
              {makeFormalTimeString(createdAt)}
            </div>
            <TagListOfLogCard css={{ marginBottom: "4px" }} tags={tags} />
            <h2 css={{ fontSize: font.size.M }}>{title}</h2>
          </div>
          <MiniBlockList blocks={blocks} />
        </div>

        <div css={{ fontSize: font.size.SS, textAlign: "end" }}>
          from {contentName}
        </div>
      </motion.button>
      <Collapse in={isOpen}>
        <div
          css={{
            padding: "16px",
            border: `1px solid ${colors.cyan.DEFAULT}`,
            borderTopWidth: 0,
            borderLeftWidth: "8px",
            marginBottom: "16px",
          }}
        >
          <NormalButton
            css={{ marginBottom: "16px" }}
            onClick={onOpenModalToUpdateWithSetLog}
          >
            Update title
          </NormalButton>

          <BlockList blocks={blocks} />

          <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NormalButton onClick={() => setIsOpen(false)}>Close</NormalButton>
          <div css={{ display: "flex" }}>
            <SquareButton
              css={{ marginRight: "8px" }}
              onClick={onCreateNewNoteFromTheLog}
              Icon={EditNoteIcon}
            />
            <SquareButton
              onClick={onOpenModalToSubmitWithSetLog}
              Icon={CommitIcon}
            />
          </div>
        </div>
      </Collapse>
    </>
  );
};

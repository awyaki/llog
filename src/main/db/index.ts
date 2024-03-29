import { ipcMain } from "electron";

import { Tag, Block, Content } from "@prisma/client";

import {
  createContent,
  getContent,
  getAllContent,
  createTag,
  getAllTag,
  getNote,
  createNote,
  updateNote,
  getNoteWithContentId,
  createLog,
  getLog,
  getAllLog,
  updateBlock,
  getAllBlock,
  updateContentName,
  upsertContentBlocks,
  updateContentTags,
  deleteConnectContentTags,
  deleteContent,
  deleteNote,
  updateLogTitle,
  getAllContentName,
  deleteTag,
} from "./api";

export const useDBQueryOnClient = () => {
  ipcMain.handle("createTag", async (_, name: string) => {
    const result = await createTag(name);
    return result;
  });

  ipcMain.handle("getAllTag", async () => {
    const result = await getAllTag();
    return result;
  });

  ipcMain.handle(
    "createContent",
    async (_, name: string, tags: Tag[], blocksNumber: number) => {
      const result = await createContent(name, tags, blocksNumber);
      return result;
    },
  );

  ipcMain.handle("getAllContent", async () => {
    const result = await getAllContent();
    return result;
  });

  ipcMain.handle("getContent", async (_, id: number) => {
    const result = await getContent(id);
    return result;
  });

  ipcMain.handle(
    "updateContentName",
    async (_, { id, name }: Pick<Content, "id" | "name">) => {
      const result = await updateContentName({ id, name });
      return result;
    },
  );

  ipcMain.handle(
    "createNote",
    async (
      _,
      mkd: string,
      transformed: string,
      tags: Tag[],
      blocks: Block[],
      contentId: number,
    ) => {
      const result = await createNote(
        mkd,
        transformed,
        tags,
        blocks,
        contentId,
      );
      return result;
    },
  );

  ipcMain.handle("getNote", async (_, id: number) => {
    const result = await getNote(id);
    return result;
  });

  ipcMain.handle(
    "updateNote",
    async (
      _,
      id: number,
      markdown: string,
      html: string,
      tags: Tag[],
      blocks: Block[],
      contentId: number,
      commitedAt: Date | null,
      updatedAt: Date,
    ) => {
      const result = await updateNote(
        id,
        markdown,
        html,
        tags,
        blocks,
        contentId,
        commitedAt,
        updatedAt,
      );
      return result;
    },
  );

  ipcMain.handle("getNoteWithContentId", async (_, contentId: number) => {
    const result = await getNoteWithContentId(contentId);
    return result;
  });

  ipcMain.handle("deleteNote", async (_, id: number) => {
    const result = await deleteNote(id);
    return result;
  });

  ipcMain.handle(
    "createLog",
    async (
      _,
      markdown: string,
      html: string,
      blocks: Block[],
      tags: Tag[],
      contentName: string,
      title: string,
      noteId: number,
      contentId: number,
    ) => {
      const result = await createLog(
        markdown,
        html,
        blocks,
        tags,
        title,
        contentName,
        noteId,
        contentId,
      );
      return result;
    },
  );

  ipcMain.handle("getLog", async (_, id: number) => {
    const result = await getLog(id);
    return result;
  });

  ipcMain.handle(
    "updateBlock",
    async (
      _,
      block: Pick<Block, "id" | "iteration" | "commitedAt" | "level">,
    ) => {
      const result = await updateBlock(block);
      return result;
    },
  );

  ipcMain.handle("getAllBlock", async (_) => {
    const result = await getAllBlock();
    return result;
  });

  ipcMain.handle(
    "upsertContentBlocks",
    async (
      _,
      id: number,
      blockMaxUnitNumber: number,
      howManyBlocks: number,
    ) => {
      const result = await upsertContentBlocks(
        id,
        blockMaxUnitNumber,
        howManyBlocks,
      );
      return result;
    },
  );

  ipcMain.handle("updateContentTags", async (_, id: number, tags: Tag[]) => {
    const result = await updateContentTags(id, tags);
    return result;
  });

  ipcMain.handle("deleteConnectContentTags", async (_, id: number) => {
    const result = await deleteConnectContentTags(id);
    return result;
  });

  ipcMain.handle("deleteContent", async (_, id: number) => {
    const result = await deleteContent(id);
    return result;
  });

  ipcMain.handle("getAllLog", async () => {
    const result = await getAllLog();
    return result;
  });

  ipcMain.handle("updateLogTitle", async (_, id: number, title: string) => {
    const result = await updateLogTitle({ id, title });
    return result;
  });

  ipcMain.handle("getAllContentName", async (_) => {
    const result = await getAllContentName();
    return result;
  });

  ipcMain.handle("deleteTag", async (_, id) => {
    const result = await deleteTag(id);
    return result;
  });
};

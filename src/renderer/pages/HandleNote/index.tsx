import { VFC } from "react";

import { NoteContextProvider } from "../NoteContextProvider";

import { CollapseToSelectBlocksIsOpenContextProvider } from "./components";

import { CreateNote as SubCreateNote } from "./CreateNote";

import { ContentWithRelation } from "~/pages/type";

type Props = {
  content: ContentWithRelation;
};

export const CreateNote: VFC<Props> = ({ content }) => {
  return (
    <NoteContextProvider>
      <CollapseToSelectBlocksIsOpenContextProvider>
        <SubCreateNote content={content} />
      </CollapseToSelectBlocksIsOpenContextProvider>
    </NoteContextProvider>
  );
};

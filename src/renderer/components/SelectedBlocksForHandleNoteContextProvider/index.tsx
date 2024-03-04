import { FC, createContext, Dispatch } from "react";
import { Block } from "@prisma/client";

import { useSlectedBlocksForHandleNote, Action } from "./hooks";

type SelectedBlocksForHandleNoteContextType = {
  selectedBlocks: Block[];
  dispatch: Dispatch<Action>;
};

export const SelectedBlocksForHandleNoteContext =
  createContext<SelectedBlocksForHandleNoteContextType>({
    selectedBlocks: [],
    dispatch: () => {},
  });

export const SelectedBlocksForHandleNoteContextProvider: FC = ({
  children,
}) => {
  const [selectedBlocks, dispatch] = useSlectedBlocksForHandleNote();

  return (
    <SelectedBlocksForHandleNoteContext.Provider
      value={{ selectedBlocks, dispatch }}
    >
      {children}
    </SelectedBlocksForHandleNoteContext.Provider>
  );
};

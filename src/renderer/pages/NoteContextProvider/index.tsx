import { FC, createContext, useState, Dispatch, SetStateAction } from "react";

import { NoteWithRelation } from "../type";

type NoteContextType = {
  note: NoteWithRelation | null;
  setNote: Dispatch<SetStateAction<NoteWithRelation | null>>;
};

export const NoteContext = createContext<NoteContextType>({
  note: null,
  setNote: () => {},
});

export const NoteContextProvider: FC = ({ children }) => {
  const [note, setNote] = useState<NoteWithRelation | null>(null);

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

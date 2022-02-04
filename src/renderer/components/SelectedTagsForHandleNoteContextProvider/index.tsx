import { 
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction
  } from 'react';

import { Tag } from '@prisma/client';

type ProvidedSelectedTagsForHandleNoteContext = {
  selectedTagsForHandleNote: Tag[],
  setSelectedTagsForHandleNote: Dispatch<SetStateAction<Tag[]>>;
  toggleSelectedTagsForHandleNote: (tag: Tag) => () => void;
};

export const SelectedTagsForHandleNoteContext = createContext<ProvidedSelectedTagsForHandleNoteContext>({
  selectedTagsForHandleNote: [],
  setSelectedTagsForHandleNote: () => {},
  toggleSelectedTagsForHandleNote: () => () => {},
});

export const SelectedTagsForHandleNoteContextProvider: FC = ({ children }) => {
  const [selectedTagsForHandleNote, setSelectedTagsForHandleNote] = useState<Tag[]>([]);
  
  const toggleSelectedTagsForHandleNote = (tag: Tag) => () => {
    setSelectedTagsForHandleNote((prev) => {
      const index = prev.findIndex((t) => t.id === tag.id);
      return index === -1
              ? prev.concat({...tag})
              : prev
                  .slice(0, index)
                  .concat(selectedTagsForHandleNote.slice(index+1));
    });
  };


  return (
    <SelectedTagsForHandleNoteContext.Provider value={{ selectedTagsForHandleNote, setSelectedTagsForHandleNote, toggleSelectedTagsForHandleNote }}>
      {children}
    </SelectedTagsForHandleNoteContext.Provider>
  );
};

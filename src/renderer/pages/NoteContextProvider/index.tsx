import { FC, createContext } from 'react';

import { NoteWithRelation } from '../type';

import { useNote } from './hooks';


export const NoteContext = createContext<NoteWithRelation | null>(null);

export const NoteContextProvider: FC = ({ children }) => {
  const note = useNote();

  return (
    <NoteContext.Provider value={note}>
      {children}
    </NoteContext.Provider>
  );
};

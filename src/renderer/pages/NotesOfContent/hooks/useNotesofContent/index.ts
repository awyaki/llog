import { useState, useEffect, useCallback } from "react";

import { getNoteWithContentId } from "~/api";

import { NoteWithRelation } from "~/pages/type";

export const useNotesOfContent = (contentId: number) => {
  const [notes, setNotes] = useState<NoteWithRelation[] | null>(null);

  const [filteredNotes, _setFilteredNotes] = useState<NoteWithRelation[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedNotes = await getNoteWithContentId(contentId);
      setNotes(fetchedNotes);
    })();
  }, [contentId]);

  const setFilteredNotes = useCallback((notes: NoteWithRelation[]) => {
    _setFilteredNotes(notes);
  }, []);

  return {
    notes,
    filteredNotes,
    setFilteredNotes,
  };
};

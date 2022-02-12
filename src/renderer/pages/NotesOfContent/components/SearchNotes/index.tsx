import { VFC, useEffect } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { Collapse } from '@chakra-ui/react';

import { 
  DateInputs,
  } from '~/components/UserInputInterfaces';

import {
  ControlTagSelectionWithSearch,
  ControlSelectionOfBlockLevels,
  WarningButton
} from '~/components';

import { useSearchNotes } from './hooks';

import { NoteWithRelation } from '~/pages/type';

type SearchNotesProps = {
  css?: CSSObject;
  isOpen: boolean;
  notes: NoteWithRelation[];
  setFilteredNotes: (notes: NoteWithRelation[]) => void;
};

export const SearchNotes: VFC<SearchNotesProps> = ({
  isOpen,
  notes,
  setFilteredNotes,
  ...rest
}) => {
  const {
    filteredNotes,
    tags,
    tagsQuery,
    setTagsQuery,
    toggleTagsQuery,
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
    levelsQuery,
    setLevelsQuery,
    toggleLevelsQuery,
    clearAllConditions,
  } = useSearchNotes(notes);

  
  useEffect(() => {
    setFilteredNotes(filteredNotes);
  }, [filteredNotes]);

  return (
    <Collapse in={isOpen}>
      <div css={{
        padding: '16px',
        border: `1px solid ${colors.cyan.DEFAULT}`,
        borderRadius: '4px',
        marginBottom: '32px',
      }} {...rest}>
        <DateInputs 
          css={{ marginBottom: '32px' }}
          sinceQuery={sinceQuery}
          setSinceQuery={setSinceQuery}
          untilQuery={untilQuery}
          setUntilQuery={setUntilQuery} />
        {tags !== null ?
          <ControlTagSelectionWithSearch 
            css={{ marginBottom: '16px' }}
            tags={tags}
            selectedTags={tagsQuery}
            onToggleSelectedTags={toggleTagsQuery}
            onSetSelectedTags={setTagsQuery}
          /> : undefined}
        <ControlSelectionOfBlockLevels
          css={{ marginBottom: '32px' }}
          selectedLevels={levelsQuery}
          onSetSelectedLevels={setLevelsQuery}
          onToggleSelectedLevels={toggleLevelsQuery}
          
        />
        <WarningButton onClick={clearAllConditions}>
          Clear all conditions 
        </WarningButton>
      </div>
    </Collapse>
    );
};

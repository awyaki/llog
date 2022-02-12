import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { 
  DateInputs,
  } from '~/components/UserInputInterfaces';

import {
  ControlTagSelectionWithSearch,
  ControlSelectionOfBlockLevels,
  WarningButton
} from '~/components';

type SearchNotesProps = {
  css?: CSSObject;
};

export const SearchNotes: VFC<SearchNotesProps> = ({
  ...rest
}) => {
  return (
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
    );
};

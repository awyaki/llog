import {
  VFC,
  useCallback,
  forwardRef,
  ChangeEventHandler,
  useEffect
  } from 'react';


import { useSearchLogs } from './hooks';

import { LogWithRelation } from '~/pages/type';

import { 
  ControlTagSelectionWithSearch,
  ControlSelectionOfBlockLevels,
  ControlSelectionOfContentNameWithSearch,
  ContentNameWithId,
  } from '~/components';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';


const labelStyle: CSSObject = {
  display: 'block',
  marginBottom: '8px',
};



type SearchLogsProps = {
  css?: CSSObject;
  logs: LogWithRelation[];
  setFilteredLogs: (logs: LogWithRelation[]) => void;
};



const CustomStyledDateInput = forwardRef<HTMLButtonElement, { value?: string, onClick?: () => void, onRemove: () => void }>(({ value, onClick, onRemove }, ref) => {
  return (
    <>
      <button 
        css={{
          width: '140px',
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: '8px',
        }}
        ref={ref} 
        onClick={onClick}>
        {value === '' ? 'Month/Day/Year' : value}
      </button>
      <button onClick={onRemove}>
        x
      </button>
    </>
  );
});


type TitleInputProps = {
  css?: CSSObject;
  titleQuery: string,
  setTitleQuery: (title: string) => void;
};

const TitleInput: VFC<TitleInputProps> = ({
  titleQuery,
  setTitleQuery,
  ...rest
}) => {

  const onChangeTitleQuery = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setTitleQuery(e.target.value);
  }, [setTitleQuery]); 
  
  const onRemoveTitleQuery = useCallback(() => {
    setTitleQuery('');
  }, [setTitleQuery]);

  return (
    <div {...rest}>
      <label
        htmlFor="title-query" 
        css={labelStyle}>Title</label>
      <input
        css={{
          width: '140px',
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: '8px',
        }}
        onChange={onChangeTitleQuery}
        value={titleQuery} />
      <button
        onClick={onRemoveTitleQuery}
      >x</button>
    </div>
  );
};



type DateInputsProps = {
  css?: CSSObject;
  sinceQuery: Date | null;
  setSinceQuery: (arg: Date | null) => void;
  untilQuery: Date | null;
  setUntilQuery: (arg: Date | null) => void;
};

const DateInputs: VFC<DateInputsProps> = ({
  sinceQuery,
  setSinceQuery,
  untilQuery,
  setUntilQuery,
  ...rest
}) => {

  const onRemoveSinceQuery = useCallback(() => {
    setSinceQuery(null);
  }, []);

  const onRemoveUntilQuery = useCallback(() => {
    setUntilQuery(null);
  }, []);

  return (
       <div 
        css={{ display: 'flex' }}
        {...rest}>
         <div css={{ 
            borderRight: `1px solid ${colors.cyan.DEFAULT}`, 
            paddingRight: '24px',
            marginRight: '24px',
            }}>
            <label 
              htmlFor="since-query" 
              css={labelStyle}>Since</label>
            <DatePicker 
              id="since-query"
              startDate={null}
              selected={sinceQuery}
              onChange={setSinceQuery}
              customInput={<CustomStyledDateInput onRemove={onRemoveSinceQuery}/>}
            />
          </div>
          <div>
            <label 
              htmlFor="until-query" 
              css={labelStyle}>Until</label>
            <DatePicker 
              id="until-query"
              startDate={null}
              selected={untilQuery}
              onChange={setUntilQuery}
              customInput={<CustomStyledDateInput onRemove={onRemoveUntilQuery}/>}
            />
          </div>
      </div>
  );
};



export const SearchLogs: VFC<SearchLogsProps> = ({
  logs,
  setFilteredLogs,
}) => {

  const {
    titleQuery,
    setTitleQuery,
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
    tags,
    tagsQuery,
    setTagsQuery,
    toggleTagsQuery,
    setLevelsQuery,
    levelsQuery,
    toggleLevelsQuery,
    contentNames,
    contentNameQuery,
    setContentNameQuery,
    toggleContentNameQuery,
    filteredLogs
  } = useSearchLogs(logs);

  useEffect(() => {
    setFilteredLogs(filteredLogs);
  }, [filteredLogs]);

  return (
    <div css={{
      padding: '16px',
      border: `1px solid ${colors.cyan.DEFAULT}`,
      borderRadius: '4px',
      marginBottom: '32px',
    }}>
      <TitleInput 
        css={{ marginBottom: '16px' }}
        titleQuery={titleQuery}
        setTitleQuery={setTitleQuery} />
      <DateInputs 
        css={{ marginBottom: '16px' }}
        sinceQuery={sinceQuery}
        setSinceQuery={setSinceQuery}
        untilQuery={untilQuery}
        setUntilQuery={setUntilQuery} />
      {contentNames !== null ?
        <ControlSelectionOfContentNameWithSearch 
          contentNames={contentNames}
          selectedContentNames={contentNameQuery}
          setSelectedContentNames={setContentNameQuery}
          toggleSelectedContentNames={toggleContentNameQuery}
      /> : undefined}
      {tags !== null ?
        <ControlTagSelectionWithSearch 
          css={{ marginBottom: '16px' }}
          tags={tags}
          selectedTags={tagsQuery}
          onToggleSelectedTags={toggleTagsQuery}
          onSetSelectedTags={setTagsQuery}
        /> : undefined}
      <ControlSelectionOfBlockLevels
        selectedLevels={levelsQuery}
        onSetSelectedLevels={setLevelsQuery}
        onToggleSelectedLevels={toggleLevelsQuery}
        
      />
    </div>
  );
};

import {
  VFC,
  useCallback,
  forwardRef,
  ChangeEventHandler
  } from 'react';

import { Tag } from '@prisma/client';

import { 
  ControlTagSelectionWithSearch,
  ControlSelectionOfBlockLevels,
  } from '~/components';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { ContentNameAndId } from '../../hooks';

const labelStyle: CSSObject = {
  display: 'block',
  marginBottom: '8px',
};



type SearchLogsProps = {
  css?: CSSObject;
  titleQuery: string,
  setTitleQuery: (title: string) => void;
  sinceQuery: Date | null;
  setSinceQuery: (arg: Date | null) => void;
  untilQuery: Date | null;
  setUntilQuery: (arg: Date | null) => void;
  tags: Tag[] | null;
  tagsQuery: Tag[];
  setTagsQuery: (tags: Tag[]) => void;
  toggleTagsQuery: (tag: Tag) => void; 
  levelsQuery: Set<number>;
  setLevelsQuery: (levels: Set<number>) => void;
  toggleLevelsQuery: (level: number) => void;
  contentNameQuery: ContentNameAndId[];
  setContentNameQuery: (contentNameQuery: ContentNameAndId[]) => void;
  toggleContentNameQuery: (contentNameAndId: ContentNameAndId) => void;
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


type TitleInputProps = Pick<SearchLogsProps, 'titleQuery' | 'setTitleQuery' | 'css'>;

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



type DateInputsProps = Pick<SearchLogsProps, 'sinceQuery' | 'setSinceQuery' | 'untilQuery' | 'setUntilQuery' | 'css'>;

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
  levelsQuery,
  setLevelsQuery,
  toggleLevelsQuery,
}) => {
  
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

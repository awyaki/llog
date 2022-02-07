import {
  VFC,
  useCallback,
  forwardRef,
  ChangeEventHandler
  } from 'react';


import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

const labelStyle: CSSObject = {
  display: 'block',
  marginBottom: '8px',
};



type Props = {
  titleQuery: string,
  setTitleQuery: (title: string) => void;
  sinceQuery: Date | null;
  setSinceQuery: (arg: Date | null) => void;
  untilQuery: Date | null;
  setUntilQuery: (arg: Date | null) => void;
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



export const SearchLogs: VFC<Props> = ({
  titleQuery,
  setTitleQuery,
  sinceQuery,
  untilQuery,
  setSinceQuery,
  setUntilQuery
}) => {
  
  const onRemoveSinceQuery = useCallback(() => {
    setSinceQuery(null);
  }, []);

  const onRemoveUntilQuery = useCallback(() => {
    setUntilQuery(null);
  }, []);

  const onChangeTitleQuery = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setTitleQuery(e.target.value);
  }, []); 

  return (
    <div css={{
      padding: '16px',
      border: `1px solid ${colors.cyan.DEFAULT}`,
      borderRadius: '4px',
      marginBottom: '32px',
    }}>
      <div css={{
        display: 'flex',
      }}>
        <div css={{ 
          borderRight: `1px solid ${colors.cyan.DEFAULT}`, 
          paddingRight: '24px',
          marginRight: '24px',
          }}>
          <label 
            htmlFor="title-query" 
            css={labelStyle}>Title</label>
          <input
            onChange={onChangeTitleQuery}
            value={titleQuery}
          />
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
    </div>
  );
};

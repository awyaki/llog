import { 
  VFC,
  } from 'react';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

const labelStyle: CSSObject = {
  display: 'block',
  marginBottom: '8px',
};


type Props = {
  setSinceQuery: (arg: Date) => void;
};

export const SearchLogs: VFC<Props> = ({
  setSinceQuery,
}) => {

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
            htmlFor="since-query" 
            css={labelStyle}>Since</label>
          <input 
            id="since-query"
            onChange={(e) => setSinceQuery(new Date(e.target.value))}
            type="date" />
        </div>
        <div>
          <label 
            htmlFor="until-query" 
            css={labelStyle}>Until</label>
          <input 
            id="until-query"
            onChange={() => {}}
            type="date" />
        </div>
      </div>
    </div>
  );
};

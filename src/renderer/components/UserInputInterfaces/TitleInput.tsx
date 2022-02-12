import { VFC, useCallback, ChangeEventHandler } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

const labelStyle: CSSObject = {
  display: 'block',
  marginBottom: '8px',
};


type TitleInputProps = {
  css?: CSSObject;
  titleQuery: string,
  setTitleQuery: (title: string) => void;
};

export const TitleInput: VFC<TitleInputProps> = ({
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



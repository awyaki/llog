import { VFC, useState, ChangeEventHandler } from 'react';

import { keywordsBox } from './style/keywordsBox';
import { container } from './style/container';
import { SearchButton } from './components/SearchButton';

export const SearchKeywordsBox: VFC = () => {
  const [text, setText] = useState('');
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <form css={container}>
      <input 
        css={keywordsBox}
        type="text" 
        value={text}
        onChange={handleChange} />
      <SearchButton />
    </form>
  );
};

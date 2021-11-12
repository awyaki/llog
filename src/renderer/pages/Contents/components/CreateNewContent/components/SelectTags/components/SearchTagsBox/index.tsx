import { VFC, useState, ChangeEventHandler } from 'react';

import { tagInput } from './style/tagInput';
import { container } from './style/container';
import { SearchButton } from './components/SearchButton';

export const SearchTagsBox: VFC = () => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <form css={container}>
      <input 
        css={tagInput}
        type="text" 
        value={text}
        onChange={handleChange} />
      <SearchButton />
    </form>
  );
};

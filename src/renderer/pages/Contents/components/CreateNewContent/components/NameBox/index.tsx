import { VFC, useState, ChangeEventHandler } from 'react';

import { container } from './style/container';
import { nameInputBox } from './style/nameInputBox';
import { title } from './style/title';

export const NameBox: VFC = () => {
  const [text, setText] = useState('');
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  
  return (
    <div css={container}>
      <h2 css={title}>Name</h2>
      <input 
        css={nameInputBox}
        type="text" 
        value={text}
        onChange={handleChange} />
    </div>
  );
};

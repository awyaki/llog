import { VFC, useState, ChangeEventHandler } from 'react';

import { title } from './style/title';
import { blockInput } from './style/blockInput';

export const BlockBox: VFC = () => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2 css={title}>Blocks</h2>
      <input 
        css={blockInput}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

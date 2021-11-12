import { VFC, useState, ChangeEventHandler } from 'react';

import { container } from './style/container';
import { title } from './style/title';
import { blockInput } from './style/blockInput';

export const BlockBox: VFC = () => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return (
    <div css={container}>
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

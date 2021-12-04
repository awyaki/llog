import { VFC, useContext, ChangeEventHandler } from 'react';

import { BlockContext } from '../../BlockContextProvider';

import { container } from './style/container';
import { title } from './style/title';
import { blockInput } from './style/blockInput';

export const BlockBox: VFC = () => {
  const { block, setBlock } = useContext(BlockContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBlock(e.target.value);
  };

  return (
    <div css={container}>
      <h2 css={title}>Blocks</h2>
      <input 
        css={blockInput}
        type="text"
        value={block}
        onChange={handleChange}
      />
    </div>
  );
};

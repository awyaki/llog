import { VFC, ChangeEventHandler, useContext } from 'react';

import { NameContext } from '../../NameContextProvider';

import { container } from './style/container';
import { nameInputBox } from './style/nameInputBox';
import { title } from './style/title';

export const NameBox: VFC = () => {
  const { name, setName } = useContext(NameContext);
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  
  return (
    <div css={container}>
      <h2 css={title}>Name</h2>
      <input 
        css={nameInputBox}
        type="text" 
        value={name}
        onChange={handleChange} />
    </div>
  );
};

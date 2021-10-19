import { useState, VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { makeContainer } from './style';

type Props = {
  color: ThemeColor | 'red';
  css?: CSSObject; 
};

const SwitchButton: VFC<Props> = ({ color, ...rest }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button 
      css={makeContainer(isOn, color)} {...rest}
      onClick={() => setIsOn((prev) =>  !prev)}
    >
      <span className="circle"></span>
    </button>
  );
};

export default SwitchButton;

import { VFC } from 'react';
import MiniBlock from '../../../../MiniBlock/MiniBlock';
import { style } from './style';
import { CSSObject } from '@emotion/react';
import { Level } from '../../../../Block/type';

type Props = {
  level: Level; 
  text: string;
  css?: CSSObject; 
};


const UnitOfLevelInfo: VFC<Props> = ({ level, text, ...rest }) => {
  return (
      <div 
        css={style}
        {...rest}
      >
        <MiniBlock css={{ marginRight: '8px' }} level={level} />
        {text}
      </div>
  );
};

export default UnitOfLevelInfo;

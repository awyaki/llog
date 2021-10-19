import { VFC } from 'react';
import { makeLevelInfoList } from './functions';
import { BlockType } from '../../../Block/type';
import { CSSObject } from '@emotion/react';
import UnitOfLevelInfo from './UnitOfLevelInfo/UnitOfLevelInfo'
import { container, unitContainer } from './style';


type Props = {
  blocks: BlockType[];
  css?: CSSObject;
};




const LevelInfo: VFC<Props> = ({ blocks, ...rest }) => {
  const [I0, I1, I2, I3, I4, I5] = makeLevelInfoList(blocks);
  return (
    <div css={container} {...rest}>
      <div css={{ ...unitContainer, marginBottom: '4px' }}>
        <UnitOfLevelInfo 
          level={0}
          text={I0}
        />
        <UnitOfLevelInfo 
          level={3}
          text={I3}
        />
      </div>
      <div css={{ ...unitContainer, marginBottom: '4px' }}>
        <UnitOfLevelInfo 
          level={1}
          text={I1} 
          />
        <UnitOfLevelInfo
          level={4}
          text={I4}
        />
      </div>
      <div css={unitContainer}>
        <UnitOfLevelInfo 
          level={2}
          text={I2} 
          />
        <UnitOfLevelInfo
          level={5}
          text={I5}
        />
      </div>
    </div>
  );
};

export default LevelInfo;

import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { Log as LogType} from '../Log/type';
import Block from '../../Block/Block';
import { font } from '../../../styleConfig/font';
import { colors } from '../../../styleConfig/colors';
import { makeTimeString } from '../../../utils/functions';

type Props = {
  log: LogType;
  css?: CSSObject;
};

const Log: VFC<Props> = ({ log, ...rest }) => {
  const { blocks, commitedAt, contentsName } = log;
  return (
    <div {...rest}>
      <div
        css={{ color: colors.text, fontSize: font.size.SS, marginBottom: '5px' }}
      >
      {makeTimeString(commitedAt)}
      </div>
      <h1 css={{ marginBottom: '1rem', color: colors.text, fontSize: font.size.M }}>
        {contentsName}
      </h1>
      <div css={{ display: 'flex', flexWrap: 'wrap' }}>
        {blocks.map((block) => <Block 
                                  key={block.id}
                                  id={block.id}
                                  isSelected={false}
                                  css={{ marginRight: '.3rem', marginBottom: '.3rem' }}
                                  level={block.level}
                                  unit={block.unit}
                                />)}
      </div>
    </div>
  );
};

export default Log;

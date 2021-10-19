import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import Block from '../../Block/Block';
import { BlockType } from '../../Block/type';
import { colors } from '../../../styleConfig/colors';
import { font } from '../../../styleConfig/font';

type Props = {
  contentsName: string;
  blocks: BlockType[];
  layout?: CSSObject;
};

const ReviewCard: VFC<Props> = ({ contentsName, blocks, layout }) => {
  return (
    <div css={layout}>
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

export default ReviewCard;

import { VFC } from 'react';

import { range } from '~/utils';

import { colors } from '~/styleConfig';

import { makeMiniBlockStyle } from '~/style';

import { CSSObject } from '@emotion/react';

import { 
  motion,
  Variants
  } from 'framer-motion';

type ControlSelectionOfBlockLevelsProps = {
  css?: CSSObject;
  selectedLevels: Set<number>;
  onSetSelectedLevels: (levels: number[]) => void;
  onToggleSelectedLevels: (level: number) => void;
};


type MotionBlockProps = {
  css?: CSSObject;
  isSelected: boolean;
  level: number;
  onToggleSelected: () => void;
};


const blockVariants: Variants = {
  selected: { alignSelf: 'flex-start' },
  nonSelected: { alignSelf: 'flex-end' }
};


const MotionBlock: VFC<MotionBlockProps> = ({
  isSelected,
  level,
  onToggleSelected,
  ...rest
}) => {
  return (
    <motion.button
      variants={blockVariants}
      initial={isSelected ? 'selected' : 'nonSelected'}
      animate={isSelected ? 'selected' : 'nonSelected'}
      css={makeMiniBlockStyle(level)} 
      onClick={onToggleSelected}
      {...rest}>
    </motion.button>
  );
};


export const ControlSelectionOfBlockLevels: VFC<ControlSelectionOfBlockLevelsProps> = ({
  selectedLevels,
  onSetSelectedLevels,
  onToggleSelectedLevels,
  ...rest
}) => {
  return (
    <ul css={{
      width: '300px',
      display: 'flex',
      justifyContent: 'space-between',
    }}{...rest}>
      <div css={{
        height: '40px',
        boder: `1px solid ${colors.cyan.DEFAULT}`,
        boderRadius: '4px',
      }}></div>
      {[...range(0, 6)].map((level) => <li key={level}>
                                          <MotionBlock 
                                            level={level}
                                            isSelected={selectedLevels.has(level)}
                                            onToggleSelected={() => onToggleSelectedLevels(level)}
                                            />
                                      </li>)}
    </ul>
  );
};

import { VFC } from 'react';

import { range } from '~/utils';

import { colors, font } from '~/styleConfig';

import { makeMiniBlockStyle } from '~/style';

import { CSSObject } from '@emotion/react';

import { 
  motion,
  Variants
  } from 'framer-motion';

type ControlSelectionOfBlockLevelsProps = {
  css?: CSSObject;
  selectedLevels: Set<number>;
  onSetSelectedLevels: (levels: Set<number>) => void;
  onToggleSelectedLevels: (level: number) => void;
};


type MotionBlockProps = {
  css?: CSSObject;
  isSelected: boolean;
  level: number;
  onToggleSelected: () => void;
};

type SelectedAreaProps = {
  css?: CSSObject;
};

type ClearSelectionButton = {
  css?: CSSObject;
  onClick: () => void;
};

const blockVariants: Variants = {
  selected: { y: -33 },
  nonSelected: { y: 0 }
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

const SelectedArea: VFC<SelectedAreaProps> = ({ ...rest }) => {
  return (
      <div css={{
        height: '32px',
        borderRadius: '4px',
        backgroundColor: colors.cyan.BACKGROUND,
        border: `1px solid ${colors.cyan.DEFAULT}`,
      }} {...rest}></div>);
};

const ClearSelectionButton: VFC<ClearSelectionButton> = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      x
    </button>
  );
};

export const ControlSelectionOfBlockLevels: VFC<ControlSelectionOfBlockLevelsProps> = ({
  selectedLevels,
  onSetSelectedLevels,
  onToggleSelectedLevels,
  ...rest
}) => {
  console.log(selectedLevels);
  return (
    <div css={{
      width: '216px',
    }} {...rest}>
      <h3 css={{ 
        marginBottom: '8px',
        fontSize: font.size.S, 
        }}>Level</h3>

        <ClearSelectionButton onClick={() => onSetSelectedLevels(new Set())} />
      <SelectedArea css={{ marginRight: '8px' }}/> 
      <div css={{
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}{...rest}>
        {[...range(0, 6)].map((level) => <MotionBlock 
                          key={level}
                          level={level}
                          isSelected={selectedLevels.has(level)}
                          onToggleSelected={() => onToggleSelectedLevels(level)}
                          />)}
      </div>
    </div>
  );
};

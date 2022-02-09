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

type SelectionControlerProps = Pick<ControlSelectionOfBlockLevelsProps, 'selectedLevels' | 'onToggleSelectedLevels' | 'css'>;

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

const SelectionControler: VFC<SelectionControlerProps> = ({
  selectedLevels,
  onToggleSelectedLevels,
  ...rest
}) => {
  return (
    <div css={{ width: '216px' }} {...rest}>
    <SelectedArea css={{ marginBottom: '8px' }}/> 
    <div css={{
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
    }} {...rest}>
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

export const ControlSelectionOfBlockLevels: VFC<ControlSelectionOfBlockLevelsProps> = ({
  selectedLevels,
  onSetSelectedLevels,
  onToggleSelectedLevels,
  ...rest
}) => {
  return (
    <div {...rest}>
      <h3 css={{ 
        marginBottom: '8px',
        }}>Block Levels</h3>
      <div css={{ display: 'flex', alignItems: 'flex-start' }}>
        <SelectionControler 
          css={{ marginRight: '8px' }}
          selectedLevels={selectedLevels}
          onToggleSelectedLevels={onToggleSelectedLevels}
        />
        <ClearSelectionButton 
          css={{ marginTop: '4px' }}
          onClick={() => onSetSelectedLevels(new Set())} 
        />
      </div>
    </div>
  );
};

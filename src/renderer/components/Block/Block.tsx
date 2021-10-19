import { VFC, useContext, Dispatch, SetStateAction, memo } from 'react';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { Level } from './type';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

type Props = {
  css?: CSSObject;
  className?: string;
  id: string;
  unit: number;
  level: Level;
  isSelected?: boolean;
  setSelectedBlocks?: Dispatch<SetStateAction<string[]>>;
  disabled?: boolean;
};

const Block: VFC<Props> = memo(({ 
  id,
  unit, 
  level, 
  className, 
  isSelected, 
  setSelectedBlocks, 
  disabled,
  ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button 
      disabled={disabled}
      className={className}
      css={makeStyle(theme, level, isSelected)} {...rest}
      onClick={(e) => {
        e.preventDefault();
        if (setSelectedBlocks === undefined) return;

        setSelectedBlocks((blockIds) => {
          if (isSelected) {
            return blockIds.filter((blockid) => blockid !== id);
          }
          return blockIds.concat(id);
        });
      }}
    >
      {unit}
    </button>
  );
});

export default Block;

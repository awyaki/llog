import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

const miniStyle: CSSObject = {
  width: '18px',
  height: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.cyan.DEFAULT,
  transition: '.25',
};

const reverseMiniStyle: CSSObject = {
  width: '18px',
  height: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  transition: '.25',
};

const normalStyle: CSSObject = {
  width: '36px',
  height: '36px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.cyan.DEFAULT,
  transition: '.25',
};

const reverseNormalStyle: CSSObject = {
  width: '36px',
  height: '36px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  transition: '.25',
};

type Props = {
  css?: CSSObject;
  isOverView: boolean;
  onSwitch: () => void;
};

export const ViewSwitch: VFC<Props> = ({ 
  isOverView,
  onSwitch,
  ...rest
}) => {
  return (
    <button 
      onClick={onSwitch}
      css={{ 
        width: '110px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '8px 16px',
        borderBottom: `2px solid ${colors.cyan.DEFAULT}`}} {...rest}>
      <div
      css={isOverView ? miniStyle : reverseMiniStyle}>
      </div>
      <div
        css={!isOverView ? normalStyle : reverseNormalStyle}>
      </div>
    </button>
  );
};

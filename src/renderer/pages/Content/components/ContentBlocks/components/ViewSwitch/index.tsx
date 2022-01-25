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
  isOverView: boolean;
};

export const ViewSwitch: VFC<Props> = ({ 
  isOverView
}) => {
  return (
    <div css={{ 
      width: '100px',
      padding: '10px 20px',
      border: `1px solid ${colors.cyan.DEFAULT}`,
      borderRadius: '4px',
      }}>
      <div css={{ fontSize: font.size.SS, marginBottom: '8px' }}>Switch views</div>
      <div css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <button 
          css={isOverView ? normalStyle : reverseNormalStyle}>
        </button>
        <button
        css={!isOverView ? miniStyle : reverseMiniStyle}>
        </button>
      </div>
    </div>
  );
};

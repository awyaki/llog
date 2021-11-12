import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig/colors';
import { font } from '~/styleConfig/font';

export const makeContainer = (isOn: boolean) : CSSObject => {
  const base: CSSObject = {
    width: '50px',
    minWidth: '50px',
    textAlign: 'center',
    padding: '2px 0',
    borderRadius: '25px',
    fontSize: font.size.SS,
  };
  

  const onStyle: CSSObject = {
    ...base,
    color: colors.cyan.DEFAULT,
    border: `1px solid ${colors.cyan.DEFAULT}`,
  };

  const offStyle: CSSObject = {
    ...base,
    color: colors.text,
    border: `1px solid ${colors.text}`,
  };

  return isOn ? onStyle : offStyle;
};

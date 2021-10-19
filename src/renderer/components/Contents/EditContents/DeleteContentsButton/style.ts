import { CSSObject } from '@emotion/react';
import { colors } from '../../../../styleConfig/colors';
import { font } from '../../../../styleConfig/font';

const style: CSSObject = {
    width: '90px',
    textAlign: 'center',
    borderRadius: '1rem',
    border: `1px solid ${colors.red.DEFAULT}`,
    fontSize: font.size.SS,
    color: colors.red.DEFAULT,
    padding: '.25rem',
};

export { style };

import { VFC } from 'react';
import { colors } from '~/styleConfig/colors';

import { MdOutlineModeEditOutline } from 'react-icons/md';

export const SelectBlockButton: VFC = () => {
  return (
    <button css={{ width: '36px', height: '36px', border: `2px dashed ${colors.cyan.DEFAULT}`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MdOutlineModeEditOutline size="27px" color={colors.cyan.DEFAULT} />
    </button>
  );
};

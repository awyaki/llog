import { VFC, MouseEventHandler } from 'react';
import { colors } from '~/styleConfig/colors';

import { MdOutlineModeEditOutline } from 'react-icons/md';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SelectBlockButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} css={{ width: '36px', height: '36px', border: `2px dashed ${colors.cyan.DEFAULT}`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MdOutlineModeEditOutline size="27px" color={colors.cyan.DEFAULT} />
    </button>
  );
};

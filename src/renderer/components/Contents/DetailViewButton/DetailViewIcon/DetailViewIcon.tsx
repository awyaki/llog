import { VFC } from 'react';
import { ThemeColor } from '../../../ThemeProvider/type';
import { colors } from '../../../../styleConfig/colors';

type Props = {
  theme: ThemeColor;
};

const DetailViewIcon: VFC<Props> = ({ theme }) => {
  return (
  <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="コンテンツ操作パネル" transform="translate(-96.000000, -33.000000)">
            <g id="Group-10" transform="translate(96.500000, 27.500000)">
                <g id="Group-9" transform="translate(0.000000, 6.000000)">
                    <g id="Rectangle" fill="#EBEDF0" stroke="#DFE1E4">
                        <rect x="0.5" y="0.5" width="8" height="8"></rect>
                    </g>
                    <g id="Rectangle" transform="translate(0.000000, 12.000000)" fill={colors[theme].LEVEL[2]}>
                        <rect x="0" y="0" width="9" height="9"></rect>
                    </g>
                    <g id="Rectangle" transform="translate(12.000000, 0.000000)" fill={colors[theme].LEVEL[3]}>
                        <rect x="0" y="0" width="9" height="9"></rect>
                    </g>
                    <g id="Rectangle" transform="translate(12.000000, 12.000000)" fill={colors[theme].LEVEL[4]}>
                        <rect x="0" y="0" width="9" height="9"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
  );
};

export default DetailViewIcon;

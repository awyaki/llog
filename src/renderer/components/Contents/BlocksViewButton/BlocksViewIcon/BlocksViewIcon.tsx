import { VFC } from 'react';
import { ThemeColor } from '../../../ThemeProvider/type';
import { colors } from '../../../../styleConfig/colors';

type Props = {
  theme: ThemeColor;
};

const BlocksViewIcon: VFC<Props> = ({ theme }) => {
  return (
  <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="コンテンツ操作パネル" transform="translate(-144.000000, -27.000000)">
            <g id="Group-10" transform="translate(96.500000, 27.500000)">
                <g id="Group-3" transform="translate(48.000000, 0.000000)">
                    <g id="ブロック1" transform="translate(5.000000, 5.000000)">
                        <rect id="Rectangle" fill={colors[theme].DEFAULT} x="0" y="0" width="28" height="28" rx="4"></rect>
                        <text id="2" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                            <tspan x="9.289" y="19">2</tspan>
                        </text>
                    </g>
                    <g id="ブロック0">
                        <rect id="Rectangle" stroke="#DFE1E4" fill="#EBEDF0" x="0.5" y="0.5" width="27" height="27" rx="4"></rect>
                        <text id="1" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#898989">
                            <tspan x="9.289" y="19">1</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </svg>
  )
};

export default BlocksViewIcon;

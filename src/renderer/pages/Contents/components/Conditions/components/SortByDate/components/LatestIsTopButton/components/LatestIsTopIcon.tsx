import { VFC } from 'react';

import { colors } from '~/styleConfig/colors';

type Props = {
  active: boolean;
};

export const LatestTopIcon: VFC<Props> = ({ active }) => {
  const color = active ? colors.cyan.DEFAULT : colors.gray.LIGHT;

  return (
    <svg width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ（リスト）1デフォルト" transform="translate(-861.000000, -269.000000)">
                <g id="Group-10" transform="translate(638.000000, 155.000000)">
                    <g id="Group-17" transform="translate(248.500000, 139.500000) rotate(270.000000) translate(-248.500000, -139.500000) translate(223.000000, 114.000000)">
                        <g id="Group-5" stroke={color}>
                            <circle id="Oval" cx="25.5" cy="25.5" r="25"></circle>
                        </g>
                        <g id="arrow_back_black_24dp" transform="translate(13.000000, 14.000000)">
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <polygon id="Path" fill={color} fillRule="nonzero" points="20 11 7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
};

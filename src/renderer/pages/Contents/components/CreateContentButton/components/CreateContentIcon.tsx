import { VFC } from 'react';
import { colors } from '~/styleConfig/colors';

type Props = {
  active: boolean;
};

export const CreateContentIcon: VFC<Props> = ({ active }) => {
  const color = active ? colors.cyan.DEFAULT : colors.gray.LIGHT;
  return (
    <svg width="52px" height="51px" viewBox="0 0 52 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ（リスト）1デフォルト" transform="translate(-105.000000, -209.000000)">
                <g id="Group-9" transform="translate(105.000000, 155.000000)">
                    <g id="Group-6" transform="translate(0.500000, 54.000000)">
                        <g id="playlist_add_black_24dp" transform="translate(14.000000, 14.000000)">
                            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                            <path d="M14,10 L3,10 L3,12 L14,12 L14,10 Z M14,6 L3,6 L3,8 L14,8 L14,6 Z M18,14 L18,10 L16,10 L16,14 L12,14 L12,16 L16,16 L16,20 L18,20 L18,16 L22,16 L22,14 L18,14 Z M3,16 L10,16 L10,14 L3,14 L3,16 Z" id="Shape" fill={color} fillRule="nonzero"></path>
                        </g>
                        <circle id="Oval" stroke={color} cx="25.5" cy="25.5" r="25"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
};

import { VFC } from 'react';

type Props = {
  active: boolean;
};

export const OverviewBlocksButtonIcon: VFC<Props> = ({ active }) => {
  
  const activeIcon = (
    <svg width="132px" height="132px" viewBox="0 0 132 132" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ_2" transform="translate(-255.000000, -620.000000)">
                <g id="Group-14" transform="translate(100.000000, 620.000000)">
                    <g id="block_normal_button" transform="translate(155.000000, 0.000000)">
                        <g id="Group-21" stroke="#0590A7">
                            <circle id="Oval" cx="66" cy="66" r="65.5"></circle>
                        </g>
                        <g id="Group-13" transform="translate(45.692308, 45.692308)">
                            <g id="new_block4" transform="translate(4.061538, 0.000000)">
                                <rect id="Rectangle" fill="#058AA1" x="0" y="0" width="36.5538462" height="36.5538462"></rect>
                                <text id="4" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.5519231" y="23.2769231">4</tspan>
                                </text>
                            </g>
                            <g id="new_block3" transform="translate(2.030769, 2.030769)">
                                <rect id="Rectangle" fill="#06A9C4" x="0" y="0" width="36.5538462" height="36.5538462"></rect>
                                <text id="3" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.5659231" y="23.2769231">3</tspan>
                                </text>
                            </g>
                            <g id="new_block2" transform="translate(0.000000, 4.061538)">
                                <rect id="Rectangle" fill="#07C8E8" x="0" y="0" width="36.5538462" height="36.5538462"></rect>
                                <text id="2" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.5659231" y="23.2769231">2</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );

  const nonActiveIcon = (
    <svg width="132px" height="132px" viewBox="0 0 132 132" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ_1" transform="translate(-255.000000, -688.000000)">
                <g id="Group-14" transform="translate(100.000000, 688.000000)">
                    <g id="Group" transform="translate(155.000000, 0.000000)">
                        <g id="Group-13" transform="translate(46.000000, 46.000000)">
                            <g id="new_block4" transform="translate(4.000000, 0.000000)">
                                <rect id="Rectangle" fill="#898989" x="0" y="0" width="36" height="36"></rect>
                                <text id="4" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.275" y="23">4</tspan>
                                </text>
                            </g>
                            <g id="new_block3" transform="translate(2.000000, 2.000000)">
                                <rect id="Rectangle" fill="#898989" x="0" y="0" width="36" height="36"></rect>
                                <text id="3" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.289" y="23">3</tspan>
                                </text>
                            </g>
                            <g id="new_block2" transform="translate(0.000000, 4.000000)">
                                <rect id="Rectangle" fill="#898989" x="0" y="0" width="36" height="36"></rect>
                                <text id="2" fontFamily="HiraginoSans-W4, Hiragino Sans" fontSize="14" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="13.289" y="23">2</tspan>
                                </text>
                            </g>
                        </g>
                        <circle id="Oval" stroke="#898989" cx="66" cy="66" r="65.5"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );

  return active ? activeIcon : nonActiveIcon; 
};

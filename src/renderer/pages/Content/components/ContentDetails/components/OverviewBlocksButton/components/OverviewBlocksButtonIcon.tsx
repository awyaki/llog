import { VFC } from 'react';

type Props = {
  active: boolean;
};

export const OverviewBlocksButtonIcon: VFC<Props> = ({ active }) => {
  const activeIcon = (
    <svg width="130px" height="130px" viewBox="0 0 130 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ_1" transform="translate(-100.000000, -690.000000)">
                <g id="Group-14" transform="translate(100.000000, 688.000000)">
                    <g id="Group-21" transform="translate(0.000000, 2.000000)">
                        <g id="Group-16" transform="translate(48.000000, 48.000000)">
                            <g id="ブロック最小0cyan" fill="#EBEDF0" stroke="#DFE1E4">
                                <rect id="Rectangle" x="0.5" y="0.5" width="13.0487805" height="13.0487805"></rect>
                            </g>
                            <g id="ブロック最小1cyan" transform="translate(17.951220, 0.000000)" fill="#07C8E8">
                                <rect id="Rectangle" x="0" y="0" width="14.0487805" height="14.0487805"></rect>
                            </g>
                            <g id="ブロック最小2cyan" transform="translate(0.000000, 17.951220)" fill="#06A9C4">
                                <rect id="Rectangle" x="0" y="0" width="14.0487805" height="14.0487805"></rect>
                            </g>
                            <g id="ブロック最小3cyan" transform="translate(17.560976, 17.951220)" fill="#058AA1">
                                <rect id="Rectangle" x="0" y="0" width="14.0487805" height="14.0487805"></rect>
                            </g>
                        </g>
                        <circle id="Oval" stroke="#0590A7" cx="65" cy="65" r="64.5"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );

  const nonActiveIcon = (
    <svg width="130px" height="130px" viewBox="0 0 130 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="コンテンツ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="コンテンツ_2" transform="translate(-100.000000, -622.000000)">
                <g id="Group-14" transform="translate(100.000000, 620.000000)">
                    <g id="Group" transform="translate(0.000000, 2.000000)">
                        <g id="Group-18">
                            <g id="Group-16" transform="translate(48.000000, 48.000000)" fill="#EBEDF0" stroke="#DFE1E4">
                                <g id="ブロック最小0cyan">
                                    <rect id="Rectangle" x="0.5" y="0.5" width="13" height="13"></rect>
                                </g>
                                <g id="ブロック最小0cyan" transform="translate(18.000000, 0.000000)">
                                    <rect id="Rectangle" x="0.5" y="0.5" width="13" height="13"></rect>
                                </g>
                            </g>
                            <circle id="Oval" stroke="#898989" cx="65" cy="65" r="64.5"></circle>
                        </g>
                        <g id="ブロック最小0cyan" transform="translate(48.000000, 66.000000)" fill="#EBEDF0" stroke="#DFE1E4">
                            <rect id="Rectangle" x="0.5" y="0.5" width="13" height="13"></rect>
                        </g>
                        <g id="ブロック最小0cyan" transform="translate(66.000000, 66.000000)" fill="#EBEDF0" stroke="#DFE1E4">
                            <rect id="Rectangle" x="0.5" y="0.5" width="13" height="13"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );


  return active ? activeIcon : nonActiveIcon;
};

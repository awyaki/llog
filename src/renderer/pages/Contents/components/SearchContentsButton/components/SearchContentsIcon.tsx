import { VFC } from "react";
import { colors } from "~/styleConfig/colors";

type Props = {
  active: boolean;
};

export const SearchContentsIcon: VFC<Props> = ({ active }) => {
  const color = active ? colors.cyan.DEFAULT : colors.text;
  return (
    <svg
      width="52px"
      height="51px"
      viewBox="0 0 52 51"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="コンテンツ"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="コンテンツ（リスト）1デフォルト"
          transform="translate(-171.000000, -209.000000)"
        >
          <g id="Group-9" transform="translate(105.000000, 155.000000)">
            <g id="Group-7" transform="translate(66.500000, 54.000000)">
              <circle
                id="Oval"
                stroke={color}
                cx="25.5"
                cy="25.5"
                r="25"
              ></circle>
              <path
                d="M30.5,29 L29.71,29 L29.43,28.73 C30.41,27.59 31,26.11 31,24.5 C31,20.91 28.09,18 24.5,18 C20.91,18 18,20.91 18,24.5 C18,28.09 20.91,31 24.5,31 C26.11,31 27.59,30.41 28.73,29.43 L29,29.71 L29,30.5 L34,35.49 L35.49,34 L30.5,29 Z M24.5,29 C22.01,29 20,26.99 20,24.5 C20,22.01 22.01,20 24.5,20 C26.99,20 29,22.01 29,24.5 C29,26.99 26.99,29 24.5,29 Z"
                id="Shape"
                fill={color}
                fillRule="nonzero"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

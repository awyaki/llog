import { VFC } from "react";
import { colors } from "~/styleConfig/colors";

type Props = {
  isActive: boolean;
};

export const PreviewButtonIcon: VFC<Props> = ({ isActive }) => {
  const color = isActive ? colors.cyan.DEFAULT : colors.text;
  return (
    <svg
      width="51px"
      height="51px"
      viewBox="0 0 51 51"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="switch_edit" transform="translate(-69.000000, -1.000000)">
          <g id="Group-6" transform="translate(69.000000, 1.000000)">
            <circle
              id="Oval"
              stroke={color}
              cx="25.5"
              cy="25.5"
              r="25"
            ></circle>
            <g
              id="change_history_black_24dp"
              transform="translate(27.000000, 25.000000) rotate(90.000000) translate(-27.000000, -25.000000) translate(15.000000, 13.000000)"
            >
              <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
              <path
                d="M12,7.77 L18.39,18 L5.61,18 L12,7.77 M12,4 L2,20 L22,20 L12,4 Z"
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

import { VFC } from 'react';
import { colors } from '~/styleConfig/colors';

type Props = {
  disabled: boolean;
};

export const SaveButtonIcon: VFC<Props> = ({ disabled }) => {
  const color = disabled ? colors.text : colors.cyan.DEFAULT;

  return (
    <svg width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="note" transform="translate(-1.000000, -171.000000)">
                <g id="Group-6" transform="translate(1.000000, 171.000000)">
                    <path d="M31.8888889,14 L16.5555556,14 C15.1372222,14 14,15.15 14,16.5555556 L14,34.4444444 C14,35.85 15.1372222,37 16.5555556,37 L34.4444444,37 C35.85,37 37,35.85 37,34.4444444 L37,19.1111111 L31.8888889,14 Z M34.4444444,34.4444444 L16.5555556,34.4444444 L16.5555556,16.5555556 L30.8283333,16.5555556 L34.4444444,20.1716667 L34.4444444,34.4444444 Z M25.5,25.5 C23.3788889,25.5 21.6666667,27.2122222 21.6666667,29.3333333 C21.6666667,31.4544444 23.3788889,33.1666667 25.5,33.1666667 C27.6211111,33.1666667 29.3333333,31.4544444 29.3333333,29.3333333 C29.3333333,27.2122222 27.6211111,25.5 25.5,25.5 Z M17.8333333,17.8333333 L29.3333333,17.8333333 L29.3333333,22.9444444 L17.8333333,22.9444444 L17.8333333,17.8333333 Z" id="Shape" fill={color} fillRule="nonzero"></path>
                    <circle id="Oval" stroke={color} cx="25.5" cy="25.5" r="25"></circle>
                </g>
            </g>
        </g>
    </svg>
  );
};

import { VFC } from 'react';
import { colors } from '~/styleConfig/colors';

type Props = {
  disabled: boolean;
};

export const OneMoreNoteButtonIcon: VFC<Props> = ({ disabled }) => {
  const color = disabled ? colors.text : colors.cyan.DEFAULT; 

  return (
    <svg width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="note" transform="translate(-133.000000, -171.000000)">
                <g id="Group-8" transform="translate(1.000000, 171.000000)">
                    <g id="Group-7" transform="translate(132.000000, 0.000000)">
                        <g id="note_add_black_24dp" transform="translate(14.000000, 13.000000)">
                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M13,11 L11,11 L11,14 L8,14 L8,16 L11,16 L11,19 L13,19 L13,16 L16,16 L16,14 L13,14 L13,11 Z M14,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.89,22 5.99,22 L18,22 C19.1,22 20,21.1 20,20 L20,8 L14,2 Z M18,20 L6,20 L6,4 L13,4 L13,9 L18,9 L18,20 Z" id="Shape" fill={color} fillRule="nonzero"></path>
                        </g>
                        <circle id="Oval" stroke={color} cx="25.5" cy="25.5" r="25"></circle>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
};

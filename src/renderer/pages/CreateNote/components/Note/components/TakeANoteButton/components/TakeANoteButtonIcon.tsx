import { VFC } from 'react';
import { colors } from '~/styleConfig/colors';

type Props = {
  isActive: boolean;
};

export const TakeANoteButtonIcon: VFC<Props> = ({ isActive }) => {
  const color = isActive ? colors.cyan.DEFAULT : colors.text;
  return (
    <svg width="51px" height="51px" viewBox="0 0 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group">
                <g id="Group-5" stroke={color}>
                    <circle id="Oval" cx="25.5" cy="25.5" r="25"></circle>
                </g>
                <g id="edit_note_black_24dp" transform="translate(15.000000, 14.000000)">
                    <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                    <path d="M3,10 L14,10 L14,12 L3,12 L3,10 Z M3,8 L14,8 L14,6 L3,6 L3,8 Z M3,16 L10,16 L10,14 L3,14 L3,16 Z M18.01,12.87 L18.72,12.16 C19.11,11.77 19.74,11.77 20.13,12.16 L20.84,12.87 C21.23,13.26 21.23,13.89 20.84,14.28 L20.13,14.99 L18.01,12.87 Z M17.3,13.58 L12,18.88 L12,21 L14.12,21 L19.42,15.7 L17.3,13.58 Z" id="Shape" fill={color} fillRule="nonzero"></path>
                </g>
            </g>
        </g>
    </svg>
  );
};

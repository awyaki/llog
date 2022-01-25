import { VFC, ButtonHTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { EditNoteIcon } from '~/components';

import { 
  menuButton,
  secondaryStyle,
} from '../style';


type Props = {
  css?: CSSObject;
  secondary: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const InfoButton: VFC<Props> = ({ secondary,  ...rest }) => {
  return (
    <button 
      css={secondary ? secondaryStyle : menuButton } {...rest}>
      <EditNoteIcon />
    </button>
  );
};

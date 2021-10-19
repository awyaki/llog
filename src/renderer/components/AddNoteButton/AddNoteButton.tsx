import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { ThemeColor } from '../ThemeProvider/type';

type Props = {
  theme: ThemeColor; 
  css?: CSSObject;
};

const AddNoteButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <button {...rest}>
      <div 
        css={makeStyle(theme)}
        className="material-icons"
      >
        &#xE145;
      </div>
    </button>
  );
};

export default AddNoteButton;

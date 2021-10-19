import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { makeStyle } from './style';

type Props = {
  theme: ThemeColor;
  css?: CSSObject;
};

const EditNoteButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <button
      className="material-icons"
      css={makeStyle(theme)}
      {...rest}
    >
      &#xE745;
    </button>
  );
};

export default EditNoteButton;


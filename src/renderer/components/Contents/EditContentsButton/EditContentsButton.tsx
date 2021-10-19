import { VFC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';

type Props = {
  css?: CSSObject;
};

const EditContentsButton: VFC<Props> = ({ ...rest }) => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const { theme } = useContext(ThemeContext);
  return (
    <Link 
      to={`/contents/edit/${contentsid}`}
      css={{ color: colors[theme].DEFAULT }}
      className="material-icons" {...rest}
    >
      &#xE3C9;
    </Link>
  );
};

export default EditContentsButton;

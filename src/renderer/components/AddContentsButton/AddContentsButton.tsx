import { VFC, useContext } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../AddIcon/AddIcon';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { font } from '../../styleConfig/font';

import { ThemeColor } from '../ThemeProvider/type';

type Props = {
  css?: CSSObject; 
};


const makeLetterStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    color: colors[theme].DEFAULT,
    fontSize: font.size.SS, 
  };
  return style;
};


const AddContentButton: VFC<Props> = ({ ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to="/contents/add" {...rest}>
      <AddIcon theme={theme} />
      <span css={makeLetterStyle(theme)}></span>
    </Link>
  );
};

export default AddContentButton;

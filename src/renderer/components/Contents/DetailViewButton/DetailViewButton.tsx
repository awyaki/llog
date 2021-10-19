import { VFC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';
import DetailViewIcon from './DetailViewIcon/DetailViewIcon';

type Props = {
  css?: CSSObject; 
};

const DetailViewButton: VFC<Props> = ({ ...rest }) => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={`/contents/detail/${contentsid}`} {...rest}>
      <DetailViewIcon theme={theme} />
    </Link>
  );
};

export default DetailViewButton;

import { VFC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import BlocksViewIcon from './BlocksViewIcon/BlocksViewIcon';
import { CSSObject } from '@emotion/react';

type Props = {
  css?: CSSObject;
};

const BlocksViewButton: VFC<Props> = ({ ...rest }) => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={`/contents/blocks/${contentsid}`} {...rest}>
      <BlocksViewIcon theme={theme} />
    </Link>
  );
};

export default BlocksViewButton;

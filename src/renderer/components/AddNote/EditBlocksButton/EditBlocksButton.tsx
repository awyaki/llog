import { useContext, VFC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyle, makeEditIconStyle } from './style';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';

const EditBlocksButton: VFC = () => {
  const { url } = useRouteMatch(); 
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={`${url}/edit/blocks`} css={makeStyle(theme)}>
     <span 
      className="material-icons"
      css={makeEditIconStyle(theme)}
      >&#xE3C9;</span>
    </Link>
  );
};

export default EditBlocksButton;

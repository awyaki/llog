import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { style, editIconStyle } from './style';
import { Link, useRouteMatch } from 'react-router-dom';

type Props = {
  css?: CSSObject;
};

const EditTagsButton: VFC<Props> = ({ ...rest }) => {
  const { url } = useRouteMatch();
  return (
    <Link 
      to={`${url}/edit/tags`}
      className="material-icons"
      css={style} {...rest}>
     <span css={editIconStyle}>&#xE3C9;</span>
    </Link>
  );
};

export default EditTagsButton;

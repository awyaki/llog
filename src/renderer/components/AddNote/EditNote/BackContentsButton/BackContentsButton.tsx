import { useContext, VFC } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../../../styleConfig/colors';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';

type Props = {
  contentsId: string;
};

const BackContentsButton: VFC<Props> = ({ contentsId }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link 
      to={`/contents/detail/${contentsId}`}
      css={{ color: colors[theme].DEFAULT }}
      className="material-icons"
    >
      &#xE166;
    </Link>
  );
};

export default BackContentsButton;

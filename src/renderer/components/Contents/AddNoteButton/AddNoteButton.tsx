import { VFC, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { colors } from '../../../styleConfig/colors';

const AddNoteButton: VFC = () => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const { theme } = useContext(ThemeContext);
  return (
    <Link 
      to={`/note/add/${contentsid}`}
      className="material-icons"
      css={{ color: colors[theme].DEFAULT }}
    >
      &#xE745;
    </Link>
  ); 
};

export default AddNoteButton;

import { VFC, useContext, Dispatch, SetStateAction } from 'react';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';

type Props = {
  id: number; 
  css?: CSSObject;
  setTags: Dispatch<SetStateAction<{ id: number, name: string }[]>>;
};

const DeleteTagsButton: VFC<Props> = ({ id, setTags, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      css={{ color: colors[theme].DEFAULT, marginTop: '1px' }} {...rest}
      className="material-icons"
      onClick={(e) => {
        e.preventDefault();
        setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
      }}
      
    >&#xE92E;
    </button>
  );
};

export default DeleteTagsButton;

import { VFC, useContext, Dispatch, SetStateAction } from 'react';
import { colors } from '../../../styleConfig/colors';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';

type Props = {
  setTags: Dispatch<SetStateAction<{ id: number, name: string}[]>>;
};

const AddTagsButton: VFC<Props> = ({ setTags }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button 
      className="material-icons"
      css={{ display: 'block', color: colors[theme].DEFAULT }}
      onClick={(e) => {
        e.preventDefault();
        setTags((prevTags) => {
          const maxId = prevTags.length === 0 
                          ? 0 
                          : prevTags
                              .map((prevTag) => prevTag.id)
                              .reduce((a, b) => Math.max(a, b));
          return prevTags.concat({ id: maxId + 1, name: '' });
        });
      }}
    >
      &#xE145;
    </button>
  );
};

export default AddTagsButton;

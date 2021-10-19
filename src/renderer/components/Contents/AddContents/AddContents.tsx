import { useContext, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import { formContainer, makeTextBoxStyle, itemContainer } from './style';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import TagItems from '../../TagItems/TagItems';
import AddButton from './AddButton/AddButton';
import BackButton from '../../BackButton/BackButton';

const AddContents = () => {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();
  const [name, setName] = useState('');
  const [num, setNum] = useState('');
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const numberInputRef =useRef<HTMLInputElement>(null);

  return (
    <div>
      <AppFrame pageName="Add Contents">
        <form css={formContainer}>
          <div className="itemContainer" css={itemContainer}>
            <h2 className="title">Name</h2>
            <input 
              type="text"
              css={makeTextBoxStyle(theme)} 
              ref={nameInputRef}
              required
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
          </div>
          <TagItems 
            tags={tags}
            setTags={setTags}
            theme={theme}
          />
          <div className="itemContainer" css={itemContainer}>
            <h2 className="title">Blocks</h2>
            <input 
              type="number"
              required
              ref={numberInputRef}
              css={makeTextBoxStyle(theme)}
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
          </div>
          <AddButton />
        </form>
      </AppFrame>
      <ControlPanelContainer>
        <BackButton />
      </ControlPanelContainer>
   </div> 
  );
};

export default AddContents;

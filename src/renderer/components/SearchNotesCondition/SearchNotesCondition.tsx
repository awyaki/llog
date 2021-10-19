import { useContext, useState } from 'react';
import AppFrame from '../AppFrame/AppFrame';
import TagItems from '../TagItems/TagItems';
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer';
import DoneButton from '../DoneButton/DoneButton';
import { makeContentsSelectStyle, makePagesSelectStyle, makeKeywordsStyle } from './style';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { colors } from '../../styleConfig/colors';
import { Contents } from '../Contents/type';
import { contentsList as contentsListStub } from '../../stub/contentsStub';


const SearchNotesCondition = () => {
  const { theme } = useContext(ThemeContext);
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  const [contentsList] = useState<Contents[]>(contentsListStub);

  return (
    <AppFrame 
      pageName="Notes"
      css={{ color: colors.text }}
    >
      <form>
        <h2 css={{ marginBottom: '16px' }}>
          <label htmlFor="contents">Contents</label>
        </h2>
        <input 
          css={makeContentsSelectStyle(theme)}
          type="text" 
          autoComplete="on" 
          list="contents"
        />
        <datalist
          id="contents"
        >
          {contentsList.map((contents) => <option 
                                            value={contents.name}
                                            key={contents.id} />)}
        </datalist>
        <h2 css={{ marginBottom: '16px' }}>
          <label htmlFor="pages">Pages</label>
        </h2>
        <input 
          id="pages"
          css={makePagesSelectStyle(theme)}
          type="text"
        />
        <TagItems 
          css={{ marginBottom: '40px'}}
          tags={tags}
          setTags={setTags}
          theme={theme}
        />
        <h2 css={{ marginBottom: '16px' }}>
          <label htmlFor="keywords">Keywords</label>
        </h2>
        <input 
          id="keywords"
          css={makeKeywordsStyle(theme)}
          type="text"
        />
      </form>
      <ControlPanelContainer>
        <DoneButton />
      </ControlPanelContainer>
    </AppFrame>
  );
};

export default SearchNotesCondition;

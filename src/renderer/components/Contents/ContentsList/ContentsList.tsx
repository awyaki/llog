import { VFC, useState } from 'react';
import { Link } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';
import SearchBox from '../../SearchBox/SearchBox';
import AddContentsButton from '../../AddContentsButton/AddContentsButton';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import { Contents } from '../type';

const listContainer: CSSObject = {
  height: '70vh',
  overflowY: 'scroll',
  color: colors.text, 
  '> li': {
    marginBottom: '30px',
  },
  'li:last-child': {
    marginBottom: '0',
  }
};

const ContentsList: VFC = () => {
  const [contentsList, setContentsList] = useState<Pick<Contents, 'id' | 'name'>[]>([]);
  

  return (
    <div css={{ position: 'relative' }}>
      <AppFrame pageName="Contents">
        <SearchBox css={{ marginBottom: '30px' }}/>
          <ul css={listContainer}>
            {contentsList.map((contents) => {
              return <li key={contents.id}><Link to={`contents/${contents.id}/detail`}>{contents.name}</Link></li>
            })}
          </ul>
      </AppFrame>
      <ControlPanelContainer>
        <AddContentsButton />
      </ControlPanelContainer>
    </div>
  );
};

export default ContentsList;

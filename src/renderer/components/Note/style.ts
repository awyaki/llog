import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { colors } from '../../styleConfig/colors';

const blocksContainer: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  '> .block': {
    marginRight: '4px',
    marginBottom: '4px',
  }
};

const tagsContainer: CSSObject = {
  marginBottom: '12px',
  display: 'flex',
  flexWrap: 'wrap',
  '> .tag': {
    marginRight: '4px',
    marginBottom: '4px',
  }
};


const makeControlPanelStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '140px',
    padding: '0 16px',
    border:  `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '32px',
  };

  return style;
};

export { blocksContainer, tagsContainer, makeControlPanelStyle };


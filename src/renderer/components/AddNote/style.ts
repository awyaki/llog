import { CSSObject } from '@emotion/react';

const blocksContainer: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  '> .block': {
    marginRight: '4px',
    marginBottom: '4px',
  }
};

const tagsContainer: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  '> .tag': {
    marginRight: '4px',
    marginBottom: '4px',
  }
};

export { blocksContainer, tagsContainer };

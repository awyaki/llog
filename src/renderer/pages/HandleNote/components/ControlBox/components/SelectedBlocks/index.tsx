import { VFC, useContext } from 'react';

import { CSSObject } from '@emotion/react';

import { SelectedBlocksContext } from '~/pages/HandleNote/SelectedBlocksContextProvider';


import { Block } from './components/Block';
import { SelectBlockButton } from './components/SelectBlockButton';

import { container } from './style/container';

type Props = {
  css?: CSSObject;
  onOpenSelectBlocks: () => void;
};

export const SelectedBlocks: VFC<Props> = ({ onOpenSelectBlocks, ...rest }) => {
  const { selectedBlocks } = useContext(SelectedBlocksContext);
  return (
    <div {...rest}>

      <SelectBlockButton 
        css={{ marginBottom: '4px' }} 
        onClick={onOpenSelectBlocks}/>
      <ul css={container}>
        {selectedBlocks.map(({ id, level, unitNumber }) => <li key={id}><Block level={level} unitNumber={unitNumber} /></li>)}
      </ul>
    </div>
  );
};

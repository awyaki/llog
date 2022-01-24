import { VFC, useState, useCallback } from 'react';

import { CSSObject } from '@emotion/react';

import {
  FormControl,
  FormLabel,
  Switch
} from '@chakra-ui/react';

import { Block } from '@prisma/client';

import { title } from './style/title';

import { BlocksOverview } from './components/BlocksOverview';
import { BlocksDetailView } from './components/BlocksDetailView';

type Props = {
  blocks: Block[];
  css?: CSSObject;
};

export const ContentBlocks: VFC<Props> = ({ blocks, ...rest }) => {
  const [isDetails, setIsDetails] = useState(false);
  
  const handleChange = useCallback(() => {
    setIsDetails((cur) => !cur);
  }, []);

  
  return (
    <div {...rest}>
      <h2 css={title}>Blocks</h2>
      <FormControl display="flex" alignItems="center" mb="16px">
        <FormLabel htmlFor="show-details" mb="0">
         Show Details 
        </FormLabel>
        <Switch id="show-details" onChange={handleChange} />
      </FormControl>
      {isDetails ? <BlocksDetailView blocks={blocks} /> : <BlocksOverview blocks={blocks} />}
    </div>
  );
};

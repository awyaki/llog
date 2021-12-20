import { VFC, useState, useCallback } from 'react';

import {
  FormControl,
  FormLabel,
  Switch
} from '@chakra-ui/react';

import { Block } from '@prisma/client';

import { container } from './style/container';
import { title } from './style/title';

import { BlocksOverview } from './components/BlocksOverview';
import { BlocksDetailView } from './components/BlocksDetailView';

type Props = {
  blocks: Block[];
};

export const ContentBlocks: VFC<Props> = ({ blocks }) => {
  const [isDetails, setIsDetails] = useState(true);
  
  const handleChange = useCallback(() => {
    setIsDetails((cur) => !cur);
  }, []);

  
  return (
    <div css={container}>
      <h2 css={title}>Blocks</h2>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="show-details">
         Show Details 
        </FormLabel>
        <Switch id="show-details" onChange={handleChange} />
      </FormControl>
      {isDetails ? <BlocksDetailView blocks={blocks} /> : <BlocksOverview blocks={blocks} />}
    </div>
  );
};

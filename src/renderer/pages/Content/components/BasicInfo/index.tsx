import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { ContentWithRelation } from '~/pages/type';

import { TagsList } from '~/components';

import { makeFormalTimeString } from '~/utils';

import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';

type Props = {
  css?: CSSObject;
  content: ContentWithRelation;
};

export const BasicInfo: VFC<Props> = ({  
  content,
  ...rest
}) => {
  const { tags, blocks, createdAt, notes } = content;
  return (
    <div {...rest}>
      <TagsList 
        css={{ marginBottom: '16px' }}
        tags={tags} />
      <Table 
        maxWidth="600px"
        size="lg">
        <Tbody>
          <Tr>
            <Th>Created Time</Th>
            <Td>{makeFormalTimeString(createdAt)}</Td>
          </Tr>
          <Tr>
            <Th>Notes</Th>
            <Td>{notes.length}</Td>
          </Tr>
          <Tr>
            <Th>Blocks</Th>
            <Td>{blocks.length}</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

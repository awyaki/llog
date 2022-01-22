import { VFC, useContext } from 'react';

import { 
  OpenModalToUpdateContentTagsButton,
  CreateTagButton,
  ContentContext
} from '~/components';

import { container } from './style/container';
import { Tag } from './components/Tag';


export const TagsList: VFC = () => {
  const { content } = useContext(ContentContext);
  if (content === null) return <></>
  return (
    <>
      <ul css={{ ...container, marginBottom: '8px' }}>
        <li><CreateTagButton /></li>
        <li><OpenModalToUpdateContentTagsButton /></li>
      </ul>
      <ul css={container}>
        {content.tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
      </ul>
    </>
  );
};

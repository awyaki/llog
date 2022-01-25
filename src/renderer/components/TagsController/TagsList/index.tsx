import { VFC } from 'react';

import { Tag } from '@prisma/client';

import { 
  tagStyle, 
  reverseTagStyle,
  tagsContainer
} from '../style';

import { CSSObject } from '@emotion/react';

type Props = {
  css?: CSSObject;
  secandary?: boolean;
  tags: Tag[];
};

export const TagsList: VFC<Props> = ({ 
  tags, 
  secandary,
  ...rest }) => {
  return (
    <ul css={tagsContainer} {...rest}>
      {tags.map(({ id, name }) => 
        <li css={secandary ? reverseTagStyle : tagStyle} key={id}>
          {name}
        </li>)}
    </ul>
  );
};

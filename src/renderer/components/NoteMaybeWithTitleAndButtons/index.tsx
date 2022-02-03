import { VFC, ReactElement } from 'react';

import { noteStyle } from '~/style';

import { CSSObject } from '@emotion/react';

import {
  colors,
  font
} from '~/styleConfig';

import { NoteWithRelation } from '../type';

import {
  TagsList,
  BlockList
} from '~/components';


import { makeFormalTimeString } from '~/utils';

import 'zenn-content-css';

type Props = {
  isNested?: boolean;
  note: NoteWithRelation;
  css?: CSSObject;
};

type INoteMaybeWithTitleAndButtons = (arg: { title?: string, Buttons?: ReactElement[]}) => VFC<Props>;

export const NoteMaybeWithTitleAndButtons: INoteMaybeWithTitleAndButtons = ({
  title,
  Buttons
}) => ({ isNested, note, ...rest }) => {

  const { updatedAt, tags, blocks, transformed } = note;

  return (
      <div css={isNested ? ({ padding: '5px' }) : noteStyle} {...rest}>
        {title ? <h1 css={{ fontSize: font.size.M }}>{title}</h1> : undefined}
        <div css={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', }}>
          <div>
            <div css={{
              fontSize: font.size.SS,
              color: colors.text,
              marginBottom: '8px',
            }}>{makeFormalTimeString(updatedAt)}</div>
            <TagsList css={{ marginBottom: '8px' }} tags={tags} />
            <BlockList blocks={blocks} />
          </div>
          <ul css={{ display: 'flex' }}>
            {Buttons?.map((Button, i) => <li key={i} css={Buttons.length - 1 !== i ? ({ marginRight: '8px' }) : undefined}>{Button}</li>)}
          </ul>
        </div>
        <div className="znc" dangerouslySetInnerHTML={{ __html: transformed }}></div>
      </div>
  );
};

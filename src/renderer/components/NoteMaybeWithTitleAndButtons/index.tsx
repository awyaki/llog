import { VFC, ReactElement } from 'react';

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
  note: NoteWithRelation;
  css?: CSSObject;
};

type INoteMaybeWithTitleAndButtons = (arg: { title?: string, Buttons?: ReactElement[]}) => VFC<Props>;

export const NoteMaybeWithTitleAndButtons: INoteMaybeWithTitleAndButtons = ({
  title,
  Buttons
}) => ({ note, ...rest }) => {

  const { updatedAt, tags, blocks, transformed } = note;

  return (
      <div css={{
        minHeight: '500px',
        padding: '50px',
        boxShadow: '0px 0px 80px -26px rgba(0, 0, 0, 0.5)',
        borderRadius: '25px',
      }} {...rest}>
        {title ? <h1 css={{ fontSize: font.size.M }}>{title}</h1> : undefined}
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <div css={{
            fontSize: font.size.SS,
            color: colors.text,
            marginBottom: '8px',
          }}>{makeFormalTimeString(updatedAt)}</div>
          <ul css={{ display: 'flex' }}>
            {Buttons?.map((Button, i) => <li key={i} css={{ marginRight: '8px' }}>{Button}</li>)}
          </ul>
        </div>
        <TagsList tags={tags} />
        <BlockList blocks={blocks} />
        <div className="znc" dangerouslySetInnerHTML={{ __html: transformed }}></div>
      </div>
  );
};

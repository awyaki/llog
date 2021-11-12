import { VFC } from 'react';

import { Tag } from './components/Tag';

import { SearchCondition } from '~/stub/types';

type Props = {
  condition: SearchCondition;
};

const desc: { [k in SearchCondition['type']]: string } = {
  'IS': 'is',
  'INCLUDE': 'include',
  'SINCE': 'since',
  'UNTIL': 'until',
};


export const ConditionBody: VFC<Props> = ({ condition }) => {
  const { kind, type, text } = condition;
  switch (kind) {
    case 'TAG':
      return <>{desc[type]}<Tag name={text}/></>;
    default:
      return <>{desc[type]} {text}</>;
  }
};

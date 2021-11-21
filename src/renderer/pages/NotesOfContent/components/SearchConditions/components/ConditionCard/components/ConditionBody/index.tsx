import { VFC } from 'react';

import { Tag } from './components/Tag';

import { ConditionWithIsValid } from '~/pages/NotesOfContent/types';

type Props = {
  condition: ConditionWithIsValid;
};



export const ConditionBody: VFC<Props> = ({ condition }) => {
  const { subject, predicate, input } = condition;
  switch (subject) {
    case 'Tag':
      return <>{predicate}<Tag name={input}/></>;
    default:
      return <>{predicate} {input}</>;
  }
};

import { VFC, MouseEventHandler } from 'react';

import { container } from './style/container';

import { CloseButton } from './components/CloseButton';
import { ConditionCard } from './components/ConditionCard';
import { CreateConditionButton } from './components/CreateConditionButton';


import { SearchCondition } from '~/stub/types';

type Props = {
  conditions: SearchCondition[];
  handleSearchNoteButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchConditions: VFC<Props> = ({ conditions, handleSearchNoteButtonClick }) => {
  return (
    <aside css={container}>
      <CloseButton onClick={handleSearchNoteButtonClick}/>
      <ul>
        {conditions.map((condition) => <li><ConditionCard condition={condition} /></li>)}
      </ul>
      <CreateConditionButton />
    </aside>
  );
};

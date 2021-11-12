import { VFC } from 'react';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { subContainer } from './style/subContainer';

import { DeleteButton } from './components/DeleteButton';
import { OpSwitch } from './components/OpSwitch';
import { NotSwitch } from './components/NotSwitch';
import { ConditionSwitch } from './components/ConditionSwitch';
import { ConditionBody } from './components/ConditionBody';

import { SearchCondition } from '~/stub/types';

type Props = {
  condition: SearchCondition;
};

export const ConditionCard: VFC<Props> = ({ condition }) => {
  return (
    <div css={container}>
      <div css={buttons}>
        <div>
          <OpSwitch op={condition.op} />
          <NotSwitch isOn={condition.not} />
        </div>
        <DeleteButton />
      </div>
      <div css={subContainer}>
        <ConditionSwitch isOn={true} />
        <ConditionBody condition={condition} />
      </div>
    </div>
  );
};
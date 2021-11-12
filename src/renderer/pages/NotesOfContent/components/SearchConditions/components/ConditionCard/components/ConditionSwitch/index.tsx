import { VFC } from 'react';

import { makeContainer } from './style/container';

type Props = {
  isOn: boolean;
};

export const ConditionSwitch: VFC<Props> = ({ isOn }) => {
  return (
    <button css={makeContainer(isOn)}>
    </button>
  );
};

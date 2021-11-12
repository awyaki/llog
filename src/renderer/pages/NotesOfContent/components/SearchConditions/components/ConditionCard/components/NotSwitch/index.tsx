import { VFC } from 'react';

import { makeContainer } from './style/container';

type Props = {
  isOn: boolean;
};
export const NotSwitch: VFC<Props> = ({ isOn }) => {
  return <button css={makeContainer(isOn)}>NOT</button>;
};

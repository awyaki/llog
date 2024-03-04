import { VFC, MouseEventHandler } from "react";

import { makeContainer } from "./style/container";

type Props = {
  isOn: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ConditionSwitch: VFC<Props> = ({ isOn, onClick }) => {
  return <button css={makeContainer(isOn)} onClick={onClick}></button>;
};

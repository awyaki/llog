import { VFC } from "react";

import { HomeIcon, MenuButtonWithText } from "~/components";

type Props = {
  onClick?: () => void;
};

export const HomeButton: VFC<Props> = ({ onClick }) => {
  return <MenuButtonWithText text="Home" Icon={HomeIcon} onClick={onClick} />;
};

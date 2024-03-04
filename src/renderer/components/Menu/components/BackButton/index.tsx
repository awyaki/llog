import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { BackIcon, MenuButtonWrapper } from "~/components";

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const BackButton: VFC<Props> = ({ onClick, ...rest }) => {
  return (
    <MenuButtonWrapper onClick={onClick} {...rest}>
      <BackIcon />
    </MenuButtonWrapper>
  );
};

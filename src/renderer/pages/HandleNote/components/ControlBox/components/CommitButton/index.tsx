import { VFC, MouseEventHandler } from "react";

import { CSSObject } from "@emotion/react";

import { CommitIcon, NormalButtonAnimationWrapper } from "~/components";

type Props = {
  css?: CSSObject;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CommitButton: VFC<Props> = ({ onClick, ...rest }) => {
  return (
    <NormalButtonAnimationWrapper onClick={onClick} {...rest}>
      <CommitIcon />
    </NormalButtonAnimationWrapper>
  );
};

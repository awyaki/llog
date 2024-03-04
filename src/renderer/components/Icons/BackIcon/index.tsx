import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdArrowBack } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const BackIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdArrowBack} {...rest} />;
};

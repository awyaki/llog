import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdKeyboardArrowUp } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const ArrowUpIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdKeyboardArrowUp} {...rest} />;
};

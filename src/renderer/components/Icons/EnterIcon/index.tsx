import { VFC } from "react";

import { colors } from "~/styleConfig";

import { MdKeyboardReturn } from "react-icons/md";

import { Icon } from "@chakra-ui/react";

export const EnterIcon: VFC = () => {
  return <Icon as={MdKeyboardReturn} w={4} h={4} color={colors.cyan.DEFAULT} />;
};

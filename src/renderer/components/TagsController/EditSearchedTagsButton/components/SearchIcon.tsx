import { VFC } from "react";
import { Icon } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";

import { colors } from "~/styleConfig/colors";

export const SearchIcon: VFC = () => {
  return <Icon as={MdSearch} w={4} h={4} color={colors.text} />;
};

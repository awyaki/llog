import { extendTheme } from "@chakra-ui/react";

import { Button, Heading } from "./components";
import { colors } from "./colors/colors";

const overrides = {
  components: {
    Button,
    Heading,
  },
  colors,
};

export const theme = extendTheme(overrides);

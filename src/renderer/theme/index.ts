import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/Button';
import { colors } from './colors/colors';

const overrides = {
  components: {
    Button,
  },
  colors,
};

export const theme = extendTheme(overrides);

import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/Button';

const overrides = {
  components: {
    Button,
  },
};

export const theme = extendTheme(overrides);

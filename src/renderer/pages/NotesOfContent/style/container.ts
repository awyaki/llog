import { CSSObject } from '@emotion/react';

import { container as base } from '~/pages/style/container';

export const container: CSSObject = {
  ...base,
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
};

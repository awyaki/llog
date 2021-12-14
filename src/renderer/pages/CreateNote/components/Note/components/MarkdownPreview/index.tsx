import { VFC, createElement } from 'react';
import markdownToHTML from 'zenn-markdown-html';

import { Box } from '@chakra-ui/react';

import 'zenn-content-css';

type Props = {
  markdown: string;
};

export const MarkdownPreview: VFC<Props> = ({ markdown }) => {
  const html = markdownToHTML(markdown);

  return (
    <Box className="znc">
      {createElement('article', { dangerouslySetInnerHTML: { __html: html } })}
    </Box>
  );
};

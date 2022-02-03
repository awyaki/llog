import { VFC, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import { noteStyle } from '~/style';

import { markdownToHTML } from '~/api';
import 'zenn-content-css';

type Props = {
  markdown: string;
};

export const MarkdownPreview: VFC<Props> = ({ markdown }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    (async () => {
      const _html = await markdownToHTML(markdown);
      setHtml(_html);
    })();
  }, [markdown]);

  return (
    <Box __css={noteStyle}>
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Box>
  );
};

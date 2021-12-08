import { useState, useEffect } from 'react';

import { Content } from '@prisma/client';

import { useParams } from 'react-router-dom';

export const useContent = () => {
  const [content, setContent] = useState<Content | null>(null);
  const { contentId } = useParams<{ contentId: string }>();
  
  useEffect(() => {
    (async () => {
      const content = await window.electronAPI.getContent(Number(contentId));
      console.log('useContent: content data was fetched.');
      setContent(content);
    })();
  }, []);

  return content;
};

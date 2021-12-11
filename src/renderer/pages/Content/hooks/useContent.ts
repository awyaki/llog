import { useState, useEffect } from 'react';

import { ContentWithRelation } from '../../type';

import { useParams } from 'react-router-dom';

export const useContent = () => {
  const [content, setContent] = useState<ContentWithRelation | null>(null);
  const { contentId } = useParams<{ contentId: string }>();
  
  useEffect(() => {
    (async () => {
      const content = await window.electronAPI.getContent(Number(contentId));
      setContent(content);
    })();
  }, []);

  return content;
};
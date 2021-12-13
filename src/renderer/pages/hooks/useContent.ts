import { useState, useEffect } from 'react';

import { getContent } from '~/api';

import { ContentWithRelation } from '../type';

import { useParams } from 'react-router-dom';

export const useContent = () => {
  const [content, setContent] = useState<ContentWithRelation | null>(null);
  const { contentId } = useParams<{ contentId: string }>();
  
  useEffect(() => {
    (async () => {
      const content = await getContent(Number(contentId));
      setContent(content);
    })();
  }, []);

  return content;
};

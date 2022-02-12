import { 
  useContext,
  useEffect
} from 'react';

import { useParams } from 'react-router-dom';

import { getContent } from '~/api';

import { ContentContext } from '~/components';


export const useContentHub = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const { content, setContent } = useContext(ContentContext);
    
  useEffect(() => {
    (async () => {
      if (contentId === undefined) return;
      const fetchedContent = await getContent(Number(contentId));
      setContent(fetchedContent);
    })();
  }, [contentId]);

  return { content }
};

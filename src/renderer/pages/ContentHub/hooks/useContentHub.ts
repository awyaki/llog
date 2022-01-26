import { 
  useContext,
  useEffect
} from 'react';

import { useParams } from 'react-router-dom';

import { getContent } from '~/api';

import { ContentContext } from '~/components';


export const useContentHub = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const { setContent } = useContext(ContentContext);
    
  useEffect(() => {
    (async () => {
      if (contentId === undefined) return;
      const fetchedContent = await getContent(Number(contentId));
      console.log('useContentHub useEffect fetchedContent', fetchedContent);
      setContent(fetchedContent);
    })();
  }, [contentId]);

};

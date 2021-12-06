import { useState, useEffect } from 'react';


import { Content } from '@prisma/client';


const createUseContensList = (getAllContentsFn: () => Promise<Content[]>) => {
  return () => {
    const [contents, setContents] = useState<Content[]>([]);

    useEffect(() => {
      (async () => {
        const result = await getAllContentsFn();
        setContents(result);
      })();
    }, []);
     
    return { contents, setContents };
  };
};


export const useContentsList = createUseContensList(window.electronAPI.getAllContent);

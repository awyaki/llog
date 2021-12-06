import { useEffect, useContext } from 'react';

import { ContentsContext } from '../../../ContentsContextProvider';

import { Content } from '@prisma/client';


const createUseContensList = (getAllContentsFn: () => Promise<Content[]>) => {
  return () => {
    const { contents, dispatch } = useContext(ContentsContext);

    useEffect(() => {
      (async () => {
        const result = await getAllContentsFn();
        dispatch({ type: 'CONTENTS/UPDATE', contents: result });
      })();
    }, []);
     
    return contents;
  };
};


export const useContentsList = createUseContensList(window.electronAPI.getAllContent);

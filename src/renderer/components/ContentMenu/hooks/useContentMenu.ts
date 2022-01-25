import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

type Props = {
  contentId: number;  
  confirmer?: () => boolean;
};

export const useContentMenu = ({ 
  contentId, 
  confirmer
}: Props ) => {
  const history = useHistory();

  const onClickInfoButton = useCallback(() => {
    if (confirmer === undefined) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}`);
    }
    
    return;
  }, [confirmer, history, contentId]);
    
  const onClickNotesButton = useCallback(() => {
    if (confirmer === undefined) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/notes`);
    }
    
    return;
  }, [confirmer, history, contentId]);
    
  const onClickEditNote = useCallback(() => {
    if (confirmer === undefined) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/createnote`);
    }
    
    return;
  }, [confirmer, history, contentId]);

  return {
    onClickEditNote,
    onClickNotesButton,
    onClickInfoButton
  };
};

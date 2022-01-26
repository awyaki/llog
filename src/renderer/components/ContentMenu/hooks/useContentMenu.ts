import { useCallback, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { IsAllowTransitionContext } from '~/components';

export const useContentMenu = (contentId: number) => {
  const history = useHistory();
  const { isAllowTransition, confirmer  } = useContext(IsAllowTransitionContext);

  const onClickInfoButton = useCallback(() => {
    if (isAllowTransition) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId]);
    
  const onClickNotesButton = useCallback(() => {
    if (isAllowTransition) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId]);
    
  const onClickEditNote = useCallback(() => {
    if (isAllowTransition) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    
    return;
  }, [confirmer, history, contentId]);

  return {
    onClickEditNote,
    onClickNotesButton,
    onClickInfoButton
  };
};

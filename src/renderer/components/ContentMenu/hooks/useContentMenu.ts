import { useCallback, useContext } from 'react';

import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';

import { IsAllowTransitionContext } from '~/components';

export const useContentMenu = (contentId: number) => {
  const history = useHistory();

  const { isAllowTransition, confirmer  } = useContext(IsAllowTransitionContext);
  console.log('useContentMenu isAllowTransition', isAllowTransition);

  const { pathname } = useLocation();

  const onClickInfoButton = useCallback(() => {
    if (pathname === `/content/${contentId}`) return;

    if (isAllowTransition) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId, pathname]);
    
  const onClickNotesButton = useCallback(() => {
    if (pathname === `/content/${contentId}/notes`) return;

    if (isAllowTransition) {
      history.push(`/content/${contentId}/notes`);
      return;
    }

    if (confirmer()) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId, pathname]);
    
  const onClickEditNote = useCallback(() => {
    if (pathname === `/content/${contentId}/createnote`) return;

    if (isAllowTransition) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    
    return;
  }, [confirmer, history, contentId, pathname]);

  return {
    onClickEditNote,
    onClickNotesButton,
    onClickInfoButton
  };
};

import { useCallback, useContext } from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import { IsAllowTransitionContext } from '~/components';

export const useContentMenu = (contentId: number) => {
  const history = useHistory();

  const { isAllowTransition, confirmer  } = useContext(IsAllowTransitionContext);

  const { path } = useRouteMatch();

  const onClickInfoButton = useCallback(() => {
    if (path === '/content/:contentId') return;

    if (isAllowTransition) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId, path]);
    
  const onClickNotesButton = useCallback(() => {
    if (path === '/content/:contentId/notes')

    if (isAllowTransition) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/notes`);
      return;
    }
    
    return;
  }, [confirmer, history, contentId, path]);
    
  const onClickEditNote = useCallback(() => {
    if (path === `/content/:contentId/createnote`)

    if (isAllowTransition) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    if (confirmer()) {
      history.push(`/content/${contentId}/createnote`);
      return;
    }
    
    
    return;
  }, [confirmer, history, contentId, path]);

  return {
    onClickEditNote,
    onClickNotesButton,
    onClickInfoButton
  };
};

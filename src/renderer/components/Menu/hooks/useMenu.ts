import { useCallback, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { IsAllowTransitionContext } from '~/components';

export const useMenu = () => {

  const history = useHistory();

  const { isAllowTransition, confirmer } = useContext(IsAllowTransitionContext);

  const onClickBack = useCallback(() => {
    if (isAllowTransition) {
      history.goBack();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
      return;
    }
    
    return;
  }, [isAllowTransition, confirmer, history]);
    
  const onClickForward = useCallback(() => {
    if (isAllowTransition) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
      return;
    }
    
    return;
  }, [isAllowTransition, confirmer, history]); 

  const onClickHome = useCallback(() => {
    const path = '/contents';

    if (isAllowTransition) {
      history.push(path);
      return;
    }
    
    if (confirmer()) {
      history.push(path);
      return;
    }
    
    return;
  }, [isAllowTransition, confirmer, history]);

  const onClickLogs = useCallback(() => {
    const path = '/logs';

    if (isAllowTransition) {
      history.push(path);
      return;
    }
    
    if (confirmer()) {
      history.push(path);
      return;
    }
    
    return;
  }, [isAllowTransition, confirmer, history]);

  const onClickTags = useCallback(() => {
    const path = '/tags';

    if (isAllowTransition) {
      history.push(path);
      return;
    }
    
    if (confirmer()) {
      history.push(path);
      return;
    }
    
    return;
  }, [isAllowTransition, confirmer, history]);

  return {
    onClickForward,
    onClickBack,
    onClickHome,
    onClickLogs,
    onClickTags,
  };
};

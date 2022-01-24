import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

export const useMenu = (confirmer?: () => boolean) => {

  const history = useHistory();

  const onClickBack = useCallback(() => {
    if (confirmer === undefined) {
      history.goBack();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
    }
    
    return;
  }, [confirmer, history]);
    
  const onClickFarward = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
    }
    
    return;
  }, [confirmer, history]); 

  const onClickHome = useCallback(() => {
    const path = '/contents';

    if (confirmer === undefined) {
      history.push(path);
      return;
    }
    
    if (confirmer()) {
      history.push(path);
    }
    
    return;
  }, [confirmer, history]);

  const onClickLogs = useCallback(() => {
    const path = '/logs';

    if (confirmer === undefined) {
      history.push(path);
      return;
    }
    
    if (confirmer()) {
      history.push(path);
    }
    
    return;
  }, [confirmer, history]);

  return {
    onClickFarward,
    onClickBack,
    onClickHome,
    onClickLogs,
  };
};

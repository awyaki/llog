import { VFC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { titles } from './style/titles';
import { BackArrowIcon } from './BackArrowIcon';
import { ForwardArrowIcon } from './ForwardArrowIcon';

type Props = {
  confirmer?: () => boolean;
};

export const Header: VFC<Props> = ({ confirmer }) => {
  
  const history = useHistory();

  const handleBackClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goBack();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
    }
    
    return;
  }, [confirmer, history]);
    
  const handleForwardClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.goBack();
    }
    
    return;
  }, [confirmer, history]); 

  const handleContentsClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.push('/contents');
    }
    
    return;
  }, [confirmer, history]);

  const handleTimelineClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.push('/timeline');
    }
    
    return;
  }, [confirmer, history]);

  const handleReviewsClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.push('/reviews');
    }
    
    return;
  }, [confirmer, history]); 


  const handleNotesClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.push('/notes');
    }
    
    return;
  }, [confirmer, history]); 

  const handleSettingsClick = useCallback(() => {
    if (confirmer === undefined) {
      history.goForward();
      return;
    }
    
    if (confirmer()) {
      history.push('/settings');
    }
    
    return;
  }, [confirmer, history]); 


  return (
    <header css={container}>
      <div css={buttons}>
        <button onClick={handleBackClick}>
          <BackArrowIcon />
        </button>
        <button onClick={handleForwardClick}>
          <ForwardArrowIcon />
        </button>
      </div>
      <ul css={titles}>
        <li>
          <button onClick={handleContentsClick}>Contents</button>
        </li>
        <li>
          <button onClick={handleTimelineClick}>Timeline</button>
        </li>
        <li>
          <button onClick={handleReviewsClick}>Reviews</button>
        </li>
        <li>
          <button onClick={handleNotesClick}>Notes</button>
        </li>
        <li>
          <button onClick={handleSettingsClick}>Settings</button>
        </li>
      </ul>
    </header>
  );
};

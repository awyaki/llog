import { VFC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { titles } from './style/titles';
import { BackArrowIcon } from './BackArrowIcon';
import { ForwardArrowIcon } from './ForwardArrowIcon';

type Props = {
  canceler?: () => void;
};

export const Header: VFC<Props> = ({ canceler }) => {
  
  const history = useHistory();

  const handleBackClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.goBack();
  }, [canceler, history]);
    
  const handleForwardClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.goForward();
  }, [canceler, history]); 

  const handleContentsClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.push('/contents');
  }, [canceler, history]);

  const handleTimelineClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.push('/timeline');
  }, [canceler, history]);

  const handleReviewsClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.push('/reviews');
  }, [canceler, history]); 


  const handleNotesClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.push('/notes');
  }, [canceler, history]); 

  const handleSettingsClick = useCallback(() => {
    if (canceler !== undefined) {
      canceler();
    }

    history.push('/settings');
  }, [canceler, history]); 


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

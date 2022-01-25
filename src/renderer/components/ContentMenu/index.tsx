import { VFC, useCallback } from 'react';

import { CSSObject } from '@emotion/react';

import { useHistory } from 'react-router-dom';

import { 
  InfoButton,
  NotesButton,
  EditNoteButton
} from '../Buttons';

import { colors } from '~/styleConfig';

type Props = {
  contentId: number;  
  confirmer?: () => boolean;
};

const buttonStyle: CSSObject = { 
            backgroundColor: colors.cyan.SECOND,
            '&:hover, &:focus': {
              color: colors.cyan.SECOND
            }
          };


export const ContentMenu: VFC<Props> = ({ 
  contentId,
  confirmer
}) => {
  
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

  return (
    <div css={{ 
        height: '100vh',
        position: 'sticky',
        display: 'flex',
        top: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90px', 
        padding: '90px 16px 16px 16px', 
        backgroundColor: colors.cyan.SECOND,
      }}>
      <InfoButton 
        css={{ ...buttonStyle, marginBottom: '16px' }} 
        onClick={onClickInfoButton} />
      <NotesButton 
        css={{ ...buttonStyle, marginBottom: '16px' }} 
        onClick={onClickNotesButton} />
      <EditNoteButton 
        css={buttonStyle}
        onClick={onClickEditNote} />
    </div>
  );
};

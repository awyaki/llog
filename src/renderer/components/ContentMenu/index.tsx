import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { useContentMenu } from './hooks';

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
  const {
    onClickEditNote,
    onClickInfoButton,
    onClickNotesButton
  } = useContentMenu({ contentId, confirmer });

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

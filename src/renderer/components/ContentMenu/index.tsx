import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { SlideFade } from '@chakra-ui/react';

import { useContentMenu } from './hooks';

import { 
  InfoButton,
  NotesButton,
  EditNoteButton
} from '../Buttons';

import { colors } from '~/styleConfig';

import { 
  motion, 
  Variants,
  AnimatePresence
  } from 'framer-motion';

type Props = {
  contentId: number;  
};

const buttonStyle: CSSObject = { 
            backgroundColor: colors.cyan.SECOND,
            '&:hover, &:focus': {
              color: colors.cyan.SECOND
            }
          };

const container: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export const ContentMenu: VFC<Props> = ({ 
  contentId,
}) => {
  const {
    onClickEditNote,
    onClickInfoButton,
    onClickNotesButton
  } = useContentMenu(contentId);

  return (
    <motion.nav
      key="content-menu"
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      css={{ 
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
    </motion.nav>
  );
};

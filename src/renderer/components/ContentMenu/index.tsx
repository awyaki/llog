import { VFC } from 'react';

import { useContentMenu } from './hooks';

import { colors } from '~/styleConfig';

import {
  InfoButton,
  NotesButton,
  EditNoteButton,
} from './components';

import { 
  motion, 
  Variants,
  } from 'framer-motion';

type Props = {
  contentId: number;  
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
        css={{ marginBottom: '16px' }}
        onClick={onClickInfoButton} />
      <NotesButton 
        css={{ marginBottom: '16px' }} 
        onClick={onClickNotesButton} />
      <EditNoteButton 
        onClick={onClickEditNote} />
    </motion.nav>
  );
};

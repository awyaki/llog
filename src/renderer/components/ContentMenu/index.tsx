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
        width: '100%',
        position: 'sticky',
        display: 'flex',
        top: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        minWidth: '160px',
        backgroundColor: colors.cyan.SECOND,
        zIndex: 1,
      }}>
      <InfoButton 
        onClick={onClickInfoButton} />
      <NotesButton 
        onClick={onClickNotesButton} />
      <EditNoteButton 
        onClick={onClickEditNote} />
    </motion.nav>
  );
};

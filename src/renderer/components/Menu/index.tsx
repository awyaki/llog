import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { menuButton } from './style';

import { useMenu } from './hooks';

import { 
  HomeIcon,
  LogsIcon,
  BackIcon,
  ForwardIcon,
  TagsIcon
} from '../Icons';

import { motion } from 'framer-motion';

import {
  ForwardButton,
  BackButton,
  HomeButton,
} from './components';


export const Menu: VFC = () => {
  const {
    onClickBack,
    onClickForward,
    onClickHome,
    onClickLogs,
    onClickTags
  } = useMenu();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
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
        backgroundColor: colors.cyan.DEFAULT,
        zIndex: 100,
      }}>
      <BackButton 
        css={{ marginBottom: '16px' }}
        onClick={onClickBack} />
      <ForwardButton 
        css={{ marginBottom: '32px' }}
        onClick={onClickForward} />
      <HomeButton 
        css={{ marginBottom: '16px' }}
        onClick={onClickHome} />
      <motion.button 
        onClick={onClickLogs}
        css={{ ...menuButton, marginBottom: '16px'}}>
        <LogsIcon />
      </motion.button>
      <motion.button 
        onClick={onClickTags}
        css={menuButton}>
        <TagsIcon />
      </motion.button>
    </motion.div>
  );
};

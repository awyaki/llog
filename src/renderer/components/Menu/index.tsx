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
      <button
        onClick={onClickBack}
        css={{ ...menuButton, marginBottom: '16px' }}>
        <BackIcon />
      </button>
      <button
        onClick={onClickForward}
        css={{ ...menuButton, marginBottom: '32px' }}>
        <ForwardIcon />
      </button>
      <button 
        onClick={onClickHome}
        css={{ ...menuButton, marginBottom: '16px' }}>
        <HomeIcon />
      </button>
      <button 
        onClick={onClickLogs}
        css={{ ...menuButton, marginBottom: '16px'}}>
        <LogsIcon />
      </button>
      <button 
        onClick={onClickTags}
        css={menuButton}>
        <TagsIcon />
      </button>
    </motion.div>
  );
};

import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useMenu } from './hooks';

import { motion } from 'framer-motion';

import {
  ForwardButton,
  BackButton,
  HomeButton,
  LogsButton,
  TagsButton,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '160px', 
        minWidth: '160px',
        padding: '24px 0 48px 0', 
        backgroundColor: colors.cyan.DEFAULT,
        zIndex: 100,
      }}>
      <div css={{ 
          width: '100%', 
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 0 16px 24px',
        }}>
        <BackButton 
          css={{ marginRight: '16px' }}
          onClick={onClickBack} />
        <ForwardButton 
          onClick={onClickForward} />
      </div>
      <div css={{ width: '100%' }}>
        <LogsButton onClick={onClickLogs} />
        <TagsButton onClick={onClickTags} />
        <HomeButton onClick={onClickHome} /> 
      </div>
    </motion.div>
  );
};

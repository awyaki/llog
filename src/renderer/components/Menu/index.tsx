import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useMenu } from './hooks';

import { motion } from 'framer-motion';

import {
  ForwardButton,
  BackButton,
  HomeButton,
  LogsButton,
  SettingsButton,
} from './components';


export const Menu: VFC = () => {
  const {
    onClickBack,
    onClickForward,
    onClickHome,
    onClickLogs,
    onClickSettings
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
        width: '150px', 
        minWidth: '150px',
        padding: '24px 0 0 0', 
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
      <div css={{ 
        position: 'relative',
        top: '-10%',
        width: '100%',
        marginTop: '16px',
        }}>
        <LogsButton onClick={onClickLogs} />
        <HomeButton onClick={onClickHome} /> 
        <SettingsButton onClick={onClickSettings} />
      </div>
    </motion.div>
  );
};

import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useMenu } from './hooks';

import { 
  HomeIcon,
  LogsIcon,
  BackIcon,
  ForwardIcon,
  TagsIcon
} from '../Icons';

import { 
  MenuButtonWithText
} from '../Buttons';

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '130px', 
        padding: '90px 0 16px 0', 
        backgroundColor: colors.cyan.DEFAULT,
        zIndex: 100,
      }}>
      <div css={{ 
          width: '100px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <BackButton 
          onClick={onClickBack} />
        <ForwardButton 
          onClick={onClickForward} />
      </div>
      <HomeButton onClick={onClickHome} /> 
      <LogsButton onClick={onClickLogs} />
      <TagsButton onClick={onClickTags} />
    </motion.div>
  );
};

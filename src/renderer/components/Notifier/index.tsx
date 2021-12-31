import { VFC, useContext, useEffect } from 'react';

import { container } from './style';

import { Fade, Box } from '@chakra-ui/react';

import { NotifierContext } from '~/components';

export const Notifier: VFC = () => {
  const { isShow, message, setMessage } = useContext(NotifierContext); 

  useEffect(() => {
    console.log('Notifier useEffect');
    const timerId = setTimeout(() => {
      if (isShow) {
        setMessage(undefined);
      }
    }, 3000);
    
    return () => clearTimeout(timerId);
  }, [isShow]);

  return (
    <Fade in={isShow}>
      <Box css={container}>
        Hello World
      </Box>
    </Fade>
  );
};

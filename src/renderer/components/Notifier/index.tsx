import { VFC, useContext, useEffect } from 'react';

import { container } from './style';

import { Fade, Box } from '@chakra-ui/react';

import { NotifierContext } from '~/components';

export const Notifier: VFC = () => {
  const { isShow, message, setMessage } = useContext(NotifierContext); 
  
  console.log('Notifier isShow, message', isShow, message);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isShow) {
        setMessage(undefined);
      }
    }, 3000);
    
    return () => clearTimeout(timerId);
  }, [isShow]);

  return (
    <Fade in={isShow} unmountOnExit={true}>
      <Box css={container}>
        {message}
      </Box>
    </Fade>
  );
};

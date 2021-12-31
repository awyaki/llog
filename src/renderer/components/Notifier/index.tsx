import { VFC, useContext, useEffect } from 'react';

import { container } from './style';

import { Fade, Box } from '@chakra-ui/react';

import { NotifierContext } from '~/components';

export const Notifier: VFC = () => {
  const { isShow, message, dispatch } = useContext(NotifierContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isShow) {
        dispatch({ type: 'NOTIFIER/SET_ISSHOW', isShow: false });
        dispatch({ type: 'NOTIFIER/SET_MESSAGE', message: '' });
      }
    }, 3000);
    
    return () => clearTimeout(timerId);
  }, [isShow]);

  return (
    <Fade in={isShow}>
      <Box css={container}>
        {message}
      </Box>
    </Fade>
  );
};

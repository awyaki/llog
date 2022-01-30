import { VFC, useContext, useEffect, useMemo } from 'react';

import { colors } from '~/styleConfig';

import { NotifierContext } from '~/components';

import {
  motion,
  Variants
} from 'framer-motion';

const motions: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: [0, 1, 1, 0],
    transition: { duration: 3, times: [0, 0.3, 0.7, 1] }
    },
};

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
    <motion.div 
      variants={motions}
      initial="hidden"
      animate={isShow ? 'show' : 'hidden'}
      style={{
        minWidth: '150px',
        backgroundColor: colors.cyan.DEFAULT,
        color: colors.white,
        boxShadow: '0 0 80px -10px rgba(0,0,0,0.50)',
        borderRadius: '4px',
        position: 'fixed',
        top: '85vh',
        left: '80vw',
        padding: '20px',
        zIndex: 3,
        textAlign: 'center',
      }}>
        {message}
    </motion.div>
  );
};

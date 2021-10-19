import { CSSObject } from '@emotion/react';

const expandedStyle: CSSObject = {
  position: 'fixed',
  width: '70px',
  height: '400px',
  display: 'flex',
  backgroundColor: '#fff',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '70px',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
  padding: '48px 0',
  top: '50%',
  left: 'calc(100% - 80px)',
  transform: 'translateY(-30%)',
  transition: '.3s',
};

const foldedStyle: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  width: '70px',
  padding: '23px',
  backgroundColor: '#fff',
  top: '85%',
  left: 'calc(100% - 80px)',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
  borderRadius: '70px',
  transition: '.3s'
};


export { expandedStyle, foldedStyle };

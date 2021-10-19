import { useContext } from 'react';
import LoginButton from './LoginButton/LoginButton';
import { container } from './style';
import Logo from './Logo/Logo';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div css={container}>
      <div css={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Logo 
          css={{ margin: '0 auto 2rem auto' }}
          theme={theme}
          width="200px"
        />
        <LoginButton 
          css={{ margin: '0 auto' }}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default Login;

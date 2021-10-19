import { useContext } from 'react';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { colors } from '../../../styleConfig/colors';

const MenuIcon = () => {
  const { theme } = useContext(ThemeContext);
  return (
  <svg className=".menu" width="25px" height="20px" viewBox="0 0 25 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="ログ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="復習" transform="translate(-31.000000, -29.000000)" fill={colors[theme].DEFAULT}>
        <g id="Rectangle" transform="translate(31.000000, 29.000000)">
            <path d="M2,0 L23,0 C24.1045695,-2.02906125e-16 25,0.8954305 25,2 C25,3.1045695 24.1045695,4 23,4 L2,4 C0.8954305,4 1.3527075e-16,3.1045695 0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"></path>
            <path d="M2,8 L23,8 C24.1045695,8 25,8.8954305 25,10 C25,11.1045695 24.1045695,12 23,12 L2,12 C0.8954305,12 1.3527075e-16,11.1045695 0,10 C-1.3527075e-16,8.8954305 0.8954305,8 2,8 Z"></path>
            <path d="M2,16 L23,16 C24.1045695,16 25,16.8954305 25,18 C25,19.1045695 24.1045695,20 23,20 L2,20 C0.8954305,20 1.3527075e-16,19.1045695 0,18 C-1.3527075e-16,16.8954305 0.8954305,16 2,16 Z"></path>
        </g>
      </g>
    </g>
   </svg>
  );
};

export default MenuIcon;

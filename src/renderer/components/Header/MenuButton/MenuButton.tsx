import { Link } from 'react-router-dom'; 
import MenuIcon from '../MenuIcon/MenuIcon';

const MenuButton = () => {
  return (
    <Link to="/menu">
      <MenuIcon />
    </Link>
  );
};

export default MenuButton;

import { Link } from 'react-scroll';
import "./Navbar.css";

import useWindowSize from '../../hooks/useWindowSize';
import Toggle from './children/Toggle/Toggle';
import MenuMobile from './children/menu-mobile/MenuMobile';

const Navbar = () => {
  const { isMobile } = useWindowSize();

  const openMenu = () => {
    if (typeof document !== 'undefined') {
      document.querySelector('.wrapper-menu').classList.add('active');
      document.querySelector('.wrapper-menu').classList.remove('desactive');
    }
  };


  return (
    <div className="n-wrapper desactive" >

      <div className="n-left">
        {
          isMobile
            ? <i onClick={ openMenu } className="uis uis-bars" ></i>
            : <div className="n-name">Thouma</div>
        }
        <Toggle />
      </div>

      { isMobile && <MenuMobile /> }

      <div className="n-contact" >
        <Link
          spy={ true }
          to="Contacto"
          smooth={ true }
          className="button-contact "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

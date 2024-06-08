import { Link } from 'react-scroll';
import "./Navbar.css";

import useWindowSize from '../../hooks/useWindowSize';
import Toggle from './children/Toggle/Toggle';
import MenuMobile from './children/menu-mobile/MenuMobile';
import MenuTablet from './children/menu-tablet/MenuTablet';

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const openMenu = () => {
    if (typeof document !== 'undefined') {
      document.querySelector('.wrapper-menu').classList.add('active');
      document.querySelector('.wrapper-menu').classList.remove('desactive');
    }
  };

  const getLeftContent = () => {
    return (
      <div className="n-left">
        { isMobile && <i onClick={ openMenu } className="uis uis-bars" ></i>}
        <div className="n-name">Thouma</div>
        <Toggle />
      </div>
    );
  };

  const getBtnContact = () => {
    return (
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
    );
  };

  return (
    <div className="n-wrapper desactive" >

      { getLeftContent() }

      { isMobile && <MenuMobile /> }
      { isTablet || isDesktop && <MenuTablet /> }

      { getBtnContact() }

    </div>
  );
};

export default Navbar;

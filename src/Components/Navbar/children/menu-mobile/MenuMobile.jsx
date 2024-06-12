import { Link } from 'react-scroll';
import './MenuMobile.css';
import { UilTimesCircle } from '@iconscout/react-unicons';
import { themeContext } from '../../../../context/Context';
import { useContext } from 'react';

const menuItems = [
  {
    title: 'Home',
    path: 'Navbar',
  },
  {
    title: 'Services',
    path: 'Services',
  },
  {
    title: 'Experience',
    path: 'Experience',
  },
  {
    title: 'Portfolio',
    path: 'Portfolio',
  },
  {
    title: 'Testimonials',
    path: 'Testimonial',
  },
];

const MenuMobile = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const closeMenu = () => {
    if (typeof document !== 'undefined') {
      document.querySelector('.wrapper-menu').classList.remove('active');
      document.querySelector('.wrapper-menu').classList.add('desactive');
    }
  };

  const getMenuList = () => {
    return (
      <div className='wrapper-menu' style={ { backgroundColor: darkMode ? "black" : "" }} >
        <UilTimesCircle 
          onClick={ closeMenu } className="close-menu" style={ { backgroundColor: darkMode ? "black" : "" }} />
        <ul className="menu-mobile" style={ { backgroundColor: darkMode ? "black" : "" }} >
          {
            menuItems.map((item, index) => (
              <Link
                spy={ true }
                to={ item.path }
                smooth={ true }
                key={ index }
                activeClass='activeClass'
              >
                <li 
                  style={ { color: darkMode ? "white" : "" }}
                  onClick={ closeMenu } 
                  >
                    { item.title }
                  </li>
              </Link>
            ))
          }
        </ul>
      </div>
    );
  };

  return (
    getMenuList()
  );
};

export default MenuMobile;
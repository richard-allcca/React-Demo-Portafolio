import { Link } from 'react-scroll';
import './MenuMobile.css';
import { UilTimesCircle } from '@iconscout/react-unicons';

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

  const closeMenu = () => {
    if (typeof document !== 'undefined') {
      document.querySelector('.wrapper-menu').classList.remove('active');
      document.querySelector('.wrapper-menu').classList.add('desactive');
    }
  };

  const getMenuList = () => {
    return (
      <div className='wrapper-menu' >
        <UilTimesCircle onClick={ closeMenu } className="close-menu" />
        <ul className="menu-mobile">
          {
            menuItems.map((item, index) => (
              <Link
                spy={ true }
                to={ item.path }
                smooth={ true }
                key={ index }
                activeClass='activeClass'
              >
                <li onClick={ closeMenu } >{ item.title }</li>
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
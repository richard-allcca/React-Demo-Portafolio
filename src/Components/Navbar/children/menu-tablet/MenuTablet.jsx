import { Link } from 'react-scroll';
import './MenuTablet.css';

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

const MenuTablet = () => {

  const getMenuItems = (items) => {
    return items.map((item, index) => (
      <Link
        spy={ true }
        to={ item.path }
        smooth={ true }
        key={ index }
        activeClass='activeClass'
      >
        <li className="menu-item" >{ item.title }</li>
      </Link>
    ));
  };

  const getMenuList = () => {
    return (
        <ul className="menu-tablet">
          {getMenuItems(menuItems)}
        </ul>
    );
  };

  return (
    getMenuList()
  );
};

export default MenuTablet;
import css from './Nav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Nav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };
  return (
    <>
      <ul className={isHomePage ? css.navListHome : css.navList}>
        <li>
          <NavLink
            to="/news"
            className={isHomePage ? css.navLinkHome : activeLinkClass}
          >
            News
          </NavLink>
        </li>
        <li>
         
          <NavLink
            to="/notices"
            className={isHomePage ? css.navLinkHome : activeLinkClass}
          >
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/friends"
            className={isHomePage ? css.navLinkHome : activeLinkClass}
          >
            Our friends
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;

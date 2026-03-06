import css from './Nav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Nav = ({ isMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const activeLink = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  const activeLinkMenu = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.activeMenu);
  };

  const activeLinkHome = ({ isActive }) => {
    return clsx(css.navLinkHome, isActive && css.activeHome);
  };

  console.log('isMenuOpen:', isMenuOpen);

  return (
    <>
      {!isMenuOpen && (
        <nav className={isHomePage ? css.navListHome : css.navList}>
          <NavLink
            to="/news"
            className={isHomePage ? activeLinkHome : activeLink}
          >
            News
          </NavLink>

          <NavLink
            to="/notices"
            className={isHomePage ? activeLinkHome : activeLink}
          >
            Find pet
          </NavLink>

          <NavLink
            to="/friends"
            className={isHomePage ? activeLinkHome : activeLink}
          >
            Our friends
          </NavLink>
        </nav>
      )}

      {isMenuOpen && (
        <nav className={css.navListMenu}>
          <NavLink
            to="/news"
            className={isHomePage ? activeLinkHome : activeLinkMenu}
          >
            News
          </NavLink>

          <NavLink
            to="/notices"
            className={isHomePage ? activeLinkHome : activeLinkMenu}
          >
            Find pet
          </NavLink>

          <NavLink
            to="/friends"
            className={isHomePage ? activeLinkHome : activeLinkMenu}
          >
            Our friends
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default Nav;

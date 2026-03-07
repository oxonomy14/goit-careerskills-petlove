import css from './AuthNav.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthNav = ({ isMobile, isTablet, isDesktop, openMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      {isDesktop && (
        <div className={css.authNavItem}>
          <Link
            to="/login"
            className={isHomePage ? css.logInBtnHome : css.logInBtn}
          >
            Log In
          </Link>

          <Link
            to="/register"
            className={isHomePage ? css.regBtnHome : css.regBtn}
          >
            Registration
          </Link>
        </div>
      )}


   {isTablet && (
        <div className={css.authNavItem}>
          <Link
            to="/login"
            className={isHomePage ? css.logInBtnHome : css.logInBtn}
          >
            Log In
          </Link>

          <Link
            to="/register"
            className={isHomePage ? css.regBtnHome : css.regBtn}
          >
            Registration
          </Link>
            <button className={css.authNavBurger} onClick={openMenu}>
          <svg
            width={32}
            height={32}
            className={isHomePage ? css.burgerIconHome : css.burgerIcon}
          >
            <use href={`/icons/sprite.svg#icon-burger`}></use>
          </svg>
        </button>
        </div>
        
      )}

      {(isMobile) && (
        <button className={css.authNavBurger} onClick={openMenu}>
          <svg
            width={32}
            height={32}
            className={isHomePage ? css.burgerIconHome : css.burgerIcon}
          >
            <use href={`/icons/sprite.svg#icon-burger`}></use>
          </svg>
        </button>
      )}
    </>
  );
};

export default AuthNav;

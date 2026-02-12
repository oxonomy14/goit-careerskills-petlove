import css from './AuthNav.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthNav = ({isMobile}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
     {!isMobile && <div className={css.authNavItem}>
        <Link className={isHomePage ? css.logInBtnHome : css.logInBtn}>
          Log In
        </Link>

        <Link to="/register" className={isHomePage ? css.regBtnHome : css.regBtn}>
          Registration
        </Link>
      </div>}
     {isMobile && <div>
          <svg
                      width={32}
                      height={32}
                      className={css.burgerIcon}
                    >
                      <use href={`/icons/sprite.svg?v=${Date.now()}#icon-burger`}></use>
                    </svg>
      </div>}
    </>
  );
};

export default AuthNav;

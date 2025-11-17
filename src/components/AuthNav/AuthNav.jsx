import css from './AuthNav.module.css';
import { useLocation } from 'react-router-dom';

const AuthNav = ({isMobile}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
     {!isMobile && <div className={css.authNavItem}>
        <button className={isHomePage ? css.logInBtnHome : css.logInBtn}>
          Log In
        </button>

        <button className={isHomePage ? css.regBtnHome : css.regBtn}>
          Registration
        </button>
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

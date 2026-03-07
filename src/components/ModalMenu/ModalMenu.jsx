import css from './ModalMenu.module.css';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import clsx from 'clsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import {selectIsLoggedIn} from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';

const ModalMenu = ({ isMenuOpen, closeMenu, onLogoutClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isMenuOpen) return null;



  return (
    <div className={css.backdrop} onClick={closeMenu}>
      <div
        className={isHomePage ? css.menuHome : css.menu}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeMenu}>
          <svg width={18} height={18} className={isHomePage ? css.iconXHome : css.iconX}>
            <use href="/icons/sprite.svg#icon-x" />
          </svg>
        </button>
<div className={css.nav}>
     <Nav isMenuOpen={isMenuOpen}/>
        </div>
{!isLoggedIn ? (
  <>
<div className={css.authNavItem}>
   <Link
              to="/login"
              className={isHomePage ? clsx(css.authNavBtn, css.logInBtnHome) : clsx(css.authNavBtn, css.logInBtn)}
            >
              Log In
            </Link>
  
            <Link
              to="/register"
              className={isHomePage ? clsx(css.authNavBtn, css.regBtnHome) : clsx(css.authNavBtn, css.regBtn)}
            >
              Registration
            </Link>

</div> 
</>) : (
<>
<div className={css.logOutBtnWrapper}>
<LogOutBtn   onLogoutClick={() => {
    onLogoutClick();
    closeMenu();
  }}/>
</div>
</>)
}
      </div>
    </div>
  );
};

export default ModalMenu;
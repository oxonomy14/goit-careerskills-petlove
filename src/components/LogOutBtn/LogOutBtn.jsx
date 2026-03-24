import css from './LogOutBtn.module.css';
import { useLocation } from 'react-router-dom';

const LogOutBtn = ({ onLogoutClick, variant = 'default' }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProfilePage = location.pathname === '/profile';

  const isUserNav = variant === 'userNav';

  return (
    <>
      {isHomePage && (
        <button className={css.logOutBtnHome} onClick={onLogoutClick}>
          Log out
        </button>
      )}

      {!isProfilePage && (
        <button
          className={isUserNav ? css.logOutBtnUserNav : css.logOutBtn}
          onClick={onLogoutClick}
        >
          Log out
        </button>
      )}

      {isProfilePage && (
        <button className={css.logOutBtnProfile} onClick={onLogoutClick}>
          Log out
        </button>
      )}
    </>
  );
};

export default LogOutBtn;

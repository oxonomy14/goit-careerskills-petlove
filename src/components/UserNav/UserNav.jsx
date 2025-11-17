import css from './UserNav.module.css';
import { useLocation } from 'react-router-dom';

const UserNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <div className={css.userNavItem}>
        <button className={isHomePage ? css.logOutBtnHome : css.logOutBtn}>
          Log out
        </button>
        <div className={css.user}>
        <svg
          width={24}
          height={24}
          className={css.logoIcon}
        >
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`}></use>
        </svg>
        </div>
        <div className={isHomePage ? css.userNameHome : css.userName}><p >Name</p></div>
      </div>
    </>
  );
};

export default UserNav;

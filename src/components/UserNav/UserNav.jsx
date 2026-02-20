import css from './UserNav.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/AuthSelector';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/AuthOperations';

const UserNav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

const user = useSelector(selectUser);

const dispatch = useDispatch();

const handleLogout = () => {
  dispatch(logoutUser());
};

  return (
    <>
      <div className={css.userNavItem}>
        <button className={isHomePage ? css.logOutBtnHome : css.logOutBtn}  onClick={handleLogout}>
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
       <Link className={isHomePage ? css.userNameHome : css.userName} to="/profile">{user.name || 'User'}</Link>
      </div>
    </>
  );
};

export default UserNav;
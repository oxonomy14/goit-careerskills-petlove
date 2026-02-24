import css from './UserNav.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelector';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const UserNav = ({onLogoutClick}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

const user = useSelector(selectUser);



  return (
    <>
      <div className={css.userNavItem}>
   
        <LogOutBtn onLogoutClick={onLogoutClick} variant = 'userNav'/>
        <div className={css.user}>
  {user.avatar ? (<img className={css.userImageAvatar} src={user.avatar} alt={user.name} />) : 
        (<svg
          width={24}
          height={24}
          className={css.userIcon}
        >
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`}></use>
        </svg>)}
        </div>
       <Link className={isHomePage ? css.userNameHome : css.userName} to="/profile">{user.name || 'User'}</Link>
      </div>
    </>
  );
};

export default UserNav;
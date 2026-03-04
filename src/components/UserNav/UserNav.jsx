import css from './UserNav.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelector';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const UserNav = ({onLogoutClick, isTablet, isMobile, isDesktop}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

const user = useSelector(selectUser);



  return (
   
      <div className={css.userNav}>
   
     {isDesktop && 
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
     
       </div> }

{isTablet && 
<div className={css.userNavItem}>
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
        <div className={css.burgerWrapper}>
        <svg
          width={32}
          height={32}
         
          className={isHomePage ? css.burgerIconHome : css.burgerIcon}
        >
          <use href={`/icons/sprite.svg#icon-burger`}></use>
        </svg>
       </div>
</div>
}



    {isMobile && 
    
      <div className={css.burgerWrapper}>
        <svg
          width={32}
          height={32}
         
          className={isHomePage ? css.burgerIconHome : css.burgerIcon}
        >
          <use href={`/icons/sprite.svg#icon-burger`}></use>
        </svg>
       </div>

    }

      </div>
 
  );
};

export default UserNav;
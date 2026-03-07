import css from './LogOutBtn.module.css';
import { useLocation } from 'react-router-dom';


const LogOutBtn = ({onLogoutClick, variant = 'default'}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isUserNav = variant === 'userNav';

    return (<>
    {isHomePage ?  (<button className={ css.logOutBtnHome} onClick={onLogoutClick}>Log out</button>) : 
       ( <button className={isUserNav ? css.logOutBtnUserNav : css.logOutBtn} onClick={onLogoutClick}>Log out</button>)
    }
    </>);
};

export default LogOutBtn;

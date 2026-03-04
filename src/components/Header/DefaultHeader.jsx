import AuthNav from "../AuthNav/AuthNav";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import css from "./DefaultHeader.module.css";

const Header =({isMobile, isTablet, isDesktop, isLoggedIn, onLogoutClick})=> {
    
return (
<>

<div className={css.header}>
<Logo/>
 {isDesktop && <Nav /> }
{isLoggedIn ? <UserNav onLogoutClick={onLogoutClick} isTablet={isTablet} isMobile={isMobile} isDesktop={isDesktop}/> : <AuthNav isTablet={isTablet} isMobile={isMobile} isDesktop={isDesktop}/>}
</div>

</>)
};

export default Header;
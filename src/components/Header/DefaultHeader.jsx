import AuthNav from "../AuthNav/AuthNav";

import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import css from "./DefaultHeader.module.css";

const Header =({isLoggedIn})=> {
    
return (
<>

    <div className={css.header}>
<Logo/>
<Nav/>
{isLoggedIn ? <UserNav/> : <AuthNav/>}
</div>

</>)
};

export default Header;
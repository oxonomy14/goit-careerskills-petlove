import AuthNav from "../AuthNav/AuthNav";
import Container from "../Container/DefaultContainer";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import css from "./DefaultHeader.module.css";

const Header =()=> {
    const isAuth = true;
return (
<>
<Container>
    <div className={css.header}>
<Logo/>
<Nav/>
{isAuth ? <UserNav/> : <AuthNav/>}
</div>
</Container>
</>)
};

export default Header;
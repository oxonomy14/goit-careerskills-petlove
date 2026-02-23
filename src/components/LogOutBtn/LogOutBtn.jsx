import css from './LogOutBtn.module.css';



const LogOutBtn = ({onLogoutClick}) => {



    return (<>
        <button className={css.logOutBtn} onClick={onLogoutClick}>Log out</button>
    </>);
};

export default LogOutBtn;
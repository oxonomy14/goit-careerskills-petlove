import css from './LogOutBtn.module.css';


const LogOutBtn = () => {
    return (<>
        <button className={css.logOutBtn} onClick={()=>alert("Button does not work yet")}>Log out</button>
    </>);
};

export default LogOutBtn;
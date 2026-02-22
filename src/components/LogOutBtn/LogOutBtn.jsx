import css from './LogOutBtn.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/AuthOperations';


const LogOutBtn = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
  dispatch(logoutUser());
};

    return (<>
        <button className={css.logOutBtn} onClick={handleLogout}>Log out</button>
    </>);
};

export default LogOutBtn;
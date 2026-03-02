
import css  from './MyNotices.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';


const MyNotices = () => {


    const getBtnClass = ({ isActive }) =>
  clsx(css.btn, isActive && css.btnActive);

    return (
        
        <>
        <div className={css.myNoticesWrap}>
            <div className={css.myNoticesBtn}>
                <NavLink className={getBtnClass} to="favorites">My favorite pets</NavLink>
                <NavLink  className={({ isActive }) =>
    clsx(css.btn, css.btnWide, isActive && css.btnActive)
  } to="viewed">Viewed</NavLink>
            </div>
            <div className={css.myNoticesContent}>
                  <Outlet />
            </div>
        </div>
        </>
    );
};

export default MyNotices;
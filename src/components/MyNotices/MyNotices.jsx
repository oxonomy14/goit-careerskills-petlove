
import css  from './MyNotices.module.css';
import { Link, Outlet } from 'react-router-dom';


const MyNotices = () => {
    return (
        
        <>
        <div className={css.myNoticesWrap}>
            <div className={css.myNoticesBtn}>
                <Link className={css.btnFavoritePets} to="favorites">My favorite pets</Link>
                <Link className={css.btnViewed} to="viewed">Viewed</Link>
            </div>
            <div className={css.myNoticesContent}>
                  <Outlet />
            </div>
        </div>
        </>
    );
};

export default MyNotices;
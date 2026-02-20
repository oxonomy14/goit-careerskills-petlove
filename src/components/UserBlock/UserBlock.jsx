import css from './UserBlock.module.css';
import { Link } from 'react-router-dom';
import EditUserBtn from '../EditUserBtn/EditUserBtn';

const UserBlock = () => {
    return (
        
        <>
        <div className={css.userBlock}>
            <div className={css.userWrap}>
                <span>User</span>
                <svg className={css.userIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`} />
        </svg>
            </div>
            <div className={css.userImageEmpty}>
            <div className={css.userImageWrap}>
         <svg className={css.userImageIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`} />
        </svg>
        </div>
        <Link className={css.uploadPhotoLink}>Upload photo</Link>
            </div>
            <div className={css.editUserBtnWrap}>
                <EditUserBtn/>
            </div>

        </div>
        <div className={css.userInformation}>
            <h3 className={css.userInformationTitle}>My Information</h3>
            <ul className={css.userInformationList}>
                <li className={css.userInformationItem}>
               
                </li>
                   <li className={css.userInformationItem}>
               
                   
                </li>
                   <li className={css.userInformationItem}>
               
                
                </li>
            </ul>

        </div>
        </>
    );
};

export default UserBlock;
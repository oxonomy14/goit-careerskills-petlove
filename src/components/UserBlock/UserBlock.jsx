import css from './UserBlock.module.css';
import { Link } from 'react-router-dom';
import EditUserBtn from '../EditUserBtn/EditUserBtn';
import {selectUser} from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import { useState } from 'react';


const UserBlock = () => {

  const [isEditOpen, setIsEditOpen] = useState(false);

  const openModal = () => {
    setIsEditOpen(true);
  };

  const closeModal = () => {
    setIsEditOpen(false);
  };    

const user = useSelector(selectUser);




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

                {user.avatar ? (<img className={css.userAvatar} src={user.avatar} alt={user.name} />) :
         (<svg className={css.userImageIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-user`} />
        </svg>)}
        </div>
        <Link className={css.uploadPhotoLink}>Upload photo</Link>
            </div>
            <div className={css.editUserBtnWrap}>
                <EditUserBtn openModal={openModal}/>
            </div>

        </div>
        <div className={css.userInformation}>
            <h3 className={css.userInformationTitle}>My Information</h3>
            <ul className={css.userInformationList}>
                <li className={css.userInformationItem}>
               {user.name}
                </li>
                   <li className={css.userInformationItem}>
               
                    {user.email}
                </li>
                   <li className={css.userInformationItem}>
               
                 {user.phone || 'You can will add your pnone number here'}
                </li>
            </ul>

        </div>
          {isEditOpen && (
        <ModalEditUser onClose={closeModal} />
      )}
        </>
    );
};

export default UserBlock;
import css from './UserCard.module.css';
import UserBlock from '../UserBlock/UserBlock';
import PetsBlock from '../PetsBlock/PetsBlock';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const UserCard = ({onLogoutClick}) => {
    return (
        
        <>
        <div className={css.userCard}>
            <div className={css.userBlockWrap}>
        <UserBlock/>
        </div>
        <div className={css.petBlockWrap}><PetsBlock/></div>
        <div className={css.userCardBottom}><LogOutBtn onLogoutClick={onLogoutClick}/></div>
        </div>
        </>
    );
};

export default UserCard;
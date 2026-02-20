import css from './UserCard.module.css';
import UserBlock from '../UserBlock/UserBlock';

const UserCard = () => {
    return (
        
        <>
        <div className={css.userCard}>
            <div className={css.userBlockWrap}>
        <UserBlock/>
        </div>
        <div></div>
        </div>
        </>
    );
};

export default UserCard;
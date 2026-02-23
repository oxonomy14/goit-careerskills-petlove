import css from './ProfilePage.module.css';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';

const ProfilePage = ({onLogoutClick}) => {
  return (
    <>
      <section className={css.sectionProfilePage}>
        <div className={css.wrapper}>
          <div className={css.userCard}><UserCard onLogoutClick={onLogoutClick}/></div>
          <div className={css.myNotices}><MyNotices /></div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;

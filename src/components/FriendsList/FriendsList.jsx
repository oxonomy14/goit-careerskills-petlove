import css from './FriendsList.module.css';

const FriendsList = ({children}) => {
return (
<ul className={css.list}>{children}</ul>
);
};

export default FriendsList;
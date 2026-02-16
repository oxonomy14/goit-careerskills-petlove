import css from './FriendsItem.module.css';
import { getTodayWorkTime } from '../../utils/getTodayWorkTime';
import { Link } from 'react-router-dom';

const FriendsItem = ({ friend }) => {
  const todayTime = getTodayWorkTime(friend.workDays);

  const shortAddress =
    friend.address?.length > 20
      ? friend.address.slice(0, 20) + '...'
      : (friend.address ?? 'No address provided');

  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <div className={css.firstRow}>
          <div className={css.time}>{todayTime}</div>
        </div>
        <div className={css.secondRow}>
          <div className={css.logo}>
            <img src={friend.imageUrl} alt={friend.title} />
          </div>
          <div className={css.details}>
            <h3 className={css.title}>{friend.title}</h3>
            <p>
              {' '}
              <span className={css.label}>Email:</span>
              <Link to={friend.url} target="_blank" className={css.link}   rel="noopener noreferrer"> <span className={css.value}>
               {friend.email || 'No email provided'}
              </span></Link>
            </p>
            <p>
              <span className={css.label}>Address:</span>
             <Link to={friend.url} target="_blank" className={css.link}   rel="noopener noreferrer"> <span className={css.value}></span> <span className={css.value}>
                {shortAddress || 'No address provided'}
              </span></Link>
            </p>
            <p>
              <span className={css.label}>Phone:</span>
              <Link to={friend.url} target="_blank" className={css.link}   rel="noopener noreferrer"> <span className={css.value}></span><span className={css.value}>
                {friend.phone || 'No phone provided'}
              </span></Link>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;

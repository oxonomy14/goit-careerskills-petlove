import css from './Favorites.module.css';
import NoticesItem from '../NoticesItem/NoticesItem';
import NoticesList from '../NoticesList/NoticesList';
import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/auth/authSelector';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems);
  console.log('favoriteItems', favoriteItems);

  return (
    <>
      {favoriteItems?.length ? (
        <NoticesList variant="favorites">
          {favoriteItems.map(item => (
            <NoticesItem key={item._id} notice={item} variant="favorites" />
          ))}
        </NoticesList>
      ) : (
        <div className={css.favoritesOops}>
          <p>
            Oops, <span>looks like there aren't any furries</span> on our adorable page yet.
            Do not worry! View your pets on the "find your favorite pet" page
            and add them to your favorites.
          </p>
        </div>
      )}
    </>
  );
};

export default Favorites;

import css from './NoticesItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/notices/noticesOperations';
import { selectFavoriteIds } from '../../redux/auth/authSelector';
import { openAttentionModal } from '../../redux/modal/modalSlice';
import { selectIsLoggedIn } from '../../redux/auth/authSelector';

import { openNoticeModal } from '../../redux/modal/modalSlice';

import { addViewedToStorage } from '../../utils/viewedStorage';
import { refreshViewed } from '../../redux/viewedSlice';

const NoticesItem = ({ notice, variant = 'default' }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const favoriteIds = useSelector(selectFavoriteIds);

  const isFavorite =
    Array.isArray(favoriteIds) && favoriteIds.includes(notice._id);

  const isFavoritesPage = variant === 'favorites';
  const isViewedPage = variant === 'viewed';

  const handleToggleFavorite = () => {
    if (!isLoggedIn) {
      dispatch(openAttentionModal());
      return;
    }

    if (isFavorite) {
      dispatch(removeFromFavorites(notice._id));
    } else {
      dispatch(addToFavorites(notice._id));
    }
  };

  const handleLearnMore = () => {
    if (!isLoggedIn) {
      dispatch(openAttentionModal());
      return;
    } else {
      addViewedToStorage(notice._id);
      dispatch(refreshViewed());
      dispatch(openNoticeModal(notice));
    }
  };

  return (
    <li className={isFavoritesPage || isViewedPage ? css.tabItem : css.item}>
      <img
        className={isFavoritesPage || isViewedPage ? css.tabImage : css.image}
        src={notice.imgURL}
        alt={notice.title}
      />
      <div className={css.titleRow}>
        <h3> {notice.title}</h3>

        <div className={css.reviews}>
          <svg width={16} height={16} className={css.iconStar}>
            <use href={`/icons/sprite.svg?v=${Date.now()}#icon-star`} />
          </svg>
          <span className={css.popularity}>{notice.popularity}</span>
        </div>
      </div>
      <ul
        className={
          isFavoritesPage || isViewedPage
            ? css.tabCategoryList
            : css.categoryList
        }
      >
        <li>
          <h4 className={css.category}>Name</h4>
          <p className={css.categoryInfo}>{notice.name}</p>
        </li>
        <li>
          {' '}
          <h4 className={css.category}>Birthday</h4>
          <p className={css.categoryInfo}>
            {notice.birthday
              ? new Date(notice.birthday).toLocaleDateString('uk-UA')
              : ''}
          </p>
        </li>
        <li>
          <h4 className={css.category}>Sex</h4>
          <p className={css.categoryInfo}>{notice.sex}</p>
        </li>
        <li>
          <h4 className={css.category}>Species</h4>
          <p className={css.categoryInfo}>{notice.species}</p>
        </li>
        <li>
          <h4 className={css.category}>Category</h4>
          <p className={css.categoryInfo}>{notice.category}</p>
        </li>
      </ul>
      <p className={css.comment}>{notice.comment}</p>
      <p className={css.price}>${notice.price}</p>
      <div className={css.btnWrapper}>
        <button
          className={
            isFavoritesPage || isViewedPage
              ? css.tabBtnLearnMore
              : css.btnLearnMore
          }
          onClick={handleLearnMore}
        >
          Learn more
        </button>
        <button className={css.btnfavorites} onClick={handleToggleFavorite}>
          <svg className={css.favoritesIcon}>
            <use
              href={`/icons/sprite.svg?v=${Date.now()}#${isFavorite ? 'icon-trash' : 'icon-heart'}`}
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default NoticesItem;

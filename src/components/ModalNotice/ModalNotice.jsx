import css from './ModalNotice.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const modalRoot = document.body;

const ModalNotice = ({
  isOpen,
  onClose,
  notice,
  notices,
  showCloseBtn = true,
  closeOnBackdrop = true,
  closeOnEsc = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = e => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    // блокування скролу
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, closeOnEsc, notice]);

  if (!isOpen || !notice) return null;

  const handleBackdropClick = e => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  const formattedCategory =
    notice.category.charAt(0).toUpperCase() + notice.category.slice(1);

      const formattedSex =
    notice.sex.charAt(0).toUpperCase() + notice.sex.slice(1);

      const formattedSpecies =
    notice.species.charAt(0).toUpperCase() + notice.species.slice(1);

  const maxPopularity = Math.max(...notices.map(item => item.popularity));
  const stars = Math.round((notice.popularity / maxPopularity) * 5);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {showCloseBtn && (
          <button className={css.closeBtn} onClick={onClose}>
            <svg className={css.xIcon}>
              <use href={`/icons/sprite.svg?v=${Date.now()}#icon-x`} />
            </svg>
          </button>
        )}

        <div className={css.content}>
          <div className={css.imgWrapper}>
            <img className={css.img} src={notice.imgURL} alt={notice.title} />
            <div className={css.imgCategory}>
              <span>{formattedCategory}</span>
            </div>
          </div>
          <h2 className={css.title}>{notice.title}</h2>
          <div className={css.popular}>
            <ul className={css.popularList}>
              <li className={css.popularItem}>
                {[1, 2, 3, 4, 5].map(star => (
                  <svg
                    key={star}
                    className={
                      star <= stars ? css.starkIconColor : css.starkIconNotColor
                    }
                  >
                    <use href={`/icons/sprite.svg?v=${Date.now()}#icon-star`} />
                  </svg>
                ))}
              </li>
            </ul>
            <span className={css.popularNumder}>{notice.popularity}</span>
          </div>
          <ul className={css.categoryList}>
            <li>
              <h4 className={css.category}>Name</h4>
              <p className={css.categoryInfo}>{notice.name}</p>
            </li>
            <li>
              <h4 className={css.category}>Birthday</h4>
              <p className={css.categoryInfo}>
               {
  notice.birthday
    ? new Date(notice.birthday).toLocaleDateString('uk-UA')
    : ''
}
              </p>
            </li>
            <li>
              <h4 className={css.category}>Sex</h4>
              <p className={css.categoryInfo}>{formattedSex}</p>
            </li>
            <li>
              <h4 className={css.category}>Species</h4>
              <p className={css.categoryInfo}>{formattedSpecies}</p>
            </li>
          </ul>
          <p className={css.text}>{notice.comment}</p>
          <p className={css.price}>${notice.price}</p>
          <div className={css.btnWrapper}>
            <button className={css.btnAdd} onClick={()=>{alert('This function is not yet implemented');}}>
              <span>Add to</span>
                <svg className={css.heartIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-heart`} />

        </svg>
            </button>
            <Link className={css.btnContact} to="/register">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalNotice;

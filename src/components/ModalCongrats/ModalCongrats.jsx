import css from './ModalCongrats.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';




const modalRoot = document.body;

const ModalCongrats = ({
  onClose,
isOpen,

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
  }, [isOpen,onClose, closeOnEsc]);

  const handleBackdropClick = e => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

 if (!isOpen) return null;

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
            <div className={css.imageIconWrap}>
                <img src="img/leaving.png" alt="avatar" className={css.imageIcon}/>
            </div>
<h2 className={css.title}>Congrats</h2>
<p className={css.text}>The first fluff in the favorites! May your friendship be the happiest and filled with fun.</p>

    <Link to="/profile" className={css.ModalCongratsBtn} >Go to profile</Link>
  















  
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalCongrats;

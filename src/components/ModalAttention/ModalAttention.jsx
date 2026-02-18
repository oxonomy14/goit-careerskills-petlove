import css from './ModalAttention.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const modalRoot = document.body;

const ModalAttention = ({
  isOpen,
  onClose,

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
  }, [isOpen, onClose, closeOnEsc]);

  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

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
          <div className={css.imgWrapper}><img className={css.img} src="img/attention.png" alt="Attention" /></div>
          <h2 className={css.title}>Attention</h2>
          <p className={css.text}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
          <div className={css.btnWrapper}>
            <Link className={css.btnLogIn} to="/login">Log In</Link>
            <Link className={css.btnReg}>Registration</Link>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalAttention;

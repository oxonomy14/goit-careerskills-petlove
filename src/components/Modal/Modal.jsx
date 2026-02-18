import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.body;

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  showCloseBtn = true,
  closeOnBackdrop = true,
  closeOnEsc = true,
  size = 'md', // sm | md | lg
}) {
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
      <div className={`${css.modal} ${css[size]}`}>
        {showCloseBtn && (
          <button className={css.closeBtn} onClick={onClose}>
            ✕
          </button>
        )}

        {title && <h2 className={css.title}>{title}</h2>}

        <div className={css.content}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
}
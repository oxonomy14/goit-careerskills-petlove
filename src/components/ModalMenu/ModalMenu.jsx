import css from './ModalMenu.module.css';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';

const ModalMenu = ({ isMenuOpen, closeMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isMenuOpen) return null;



  return (
    <div className={css.backdrop} onClick={closeMenu}>
      <div
        className={isHomePage ? css.menuHome : css.menu}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeMenu}>
          <svg width={18} height={18} className={isHomePage ? css.iconXHome : css.iconX}>
            <use href="/icons/sprite.svg#icon-x" />
          </svg>
        </button>
<div className={css.nav}>
     <Nav isMenuOpen={isMenuOpen}/>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
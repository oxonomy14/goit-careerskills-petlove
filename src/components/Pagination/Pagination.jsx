import css from './Pagination.module.css';
import { useMediaQuery } from 'react-responsive';

const Pagination = ({ page, totalPages, onChange }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  let pagination = [];

  if (isMobile) {
    pagination = [1];

    if (totalPages >= 2) pagination.push(2);
    if (totalPages > 2) pagination.push('...');
  } else if (isTablet) {
    pagination = [1];

    if (totalPages >= 2) pagination.push(2);
    if (totalPages >= 3) pagination.push(3);
    if (totalPages > 3) pagination.push('...');
  } else {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - page) <= 1) {
        pages.push(i);
      }
    }

    let prev;

    for (let p of pages) {
      if (prev && p - prev > 1) {
        pagination.push('...');
      }
      pagination.push(p);
      prev = p;
    }
  }

  return (
    <div className={css.pagination}>
      <button
        className={css.btnPagination}
        onClick={() => onChange(1)}
        disabled={page === 1}
      >
        <svg className={css.leftIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-left`} />
        </svg>
        <svg className={css.leftIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-left`} />
        </svg>
      </button>

      <button
        className={css.btnPagination}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        <svg className={css.leftIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-left`} />
        </svg>
      </button>

      <div className={css.btnPaginationM}>
        {pagination.map((p, index) =>
          p === '...' ? (
            <span key={`dots-${index}`} className={css.btnDots}>
              …
            </span>
          ) : (
            <button
              key={`page-${p}-${index}`}
              className={`${css.btnPagination} ${p === page ? css.active : ''}`}
              onClick={() => onChange(p)}
            >
              {p}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={css.btnPaginationR}
      >
        <svg className={css.rightIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-right`} />
        </svg>
      </button>

      <button
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
        className={css.btnPaginationR}
      >
        <svg className={css.rightIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-right`} />
        </svg>
        <svg className={css.rightIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-right`} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

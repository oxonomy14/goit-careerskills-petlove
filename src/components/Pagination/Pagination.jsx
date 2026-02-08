import css from "./Pagination.module.css";

const Pagination = ({ page, totalPages, onChange }) => {
  const pages = [];

  // базові сторінки
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      Math.abs(i - page) <= 1
    ) {
      pages.push(i);
    }
  }

  // додаємо "..."
  const pagination = [];
  let prev;

  for (let p of pages) {
    if (prev && p - prev > 1) {
      pagination.push('...');
    }
    pagination.push(p);
    prev = p;
  }

  return (
    <div className={css.pagination}>
      <button onClick={() => onChange(1)} disabled={page === 1}>
        «
      </button>

      <button onClick={() => onChange(page - 1)} disabled={page === 1}>
        ‹
      </button>

      {pagination.map((p, index) =>
  p === '...' ? (
    <span key={`dots-${index}`}>…</span>
  ) : (
    <button
      key={`page-${p}-${index}`}
      className={p === page ? css.active : ''}
      onClick={() => onChange(p)}
    >
      {p}
    </button>
  )
)}

      

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        ›
      </button>

      <button
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
import css from "./SearchField.module.css";
import { useState } from "react";

const SearchField = ({
  value = "",
  onSubmit,
  onClear,
  placeholder = "Search",
}) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onClear?.();
  };

  return (
    <>

    <form className={css.formSearchField} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={e => setQuery(e.target.value)}
        className={css.inputSearchField}
      />

      {query && (
        <button
          type="button"
          className={css.btnClear}
          onClick={handleClear}
          aria-label="Clear search"
        >
        <svg  className={css.iconX}>
          <use href="/icons/sprite.svg#icon-x" />
        </svg>
        </button>
      )}

      <button type="submit" className={css.btnSearch} aria-label="Search">
        <svg  className={css.iconSearch}>
          <use href="/icons/sprite.svg#icon-search" />
        </svg>
      </button>
    </form>
    </>
  );
};

export default SearchField;
import css from "./SearchField.module.css";

const SearchField = () => {
  return (
    <>
      <form>
                <input type="text" name="search" placeholder="Search" />
                <button type="submit" className={css.btnSearch}>
                  <svg width={18} height={18} className={css.icon}>
                    <use
                      href={`/icons/sprite.svg?v=${Date.now()}#icon-search`}
                    ></use>
                  </svg>
                </button>
              </form></>
  );
};

export default SearchField;
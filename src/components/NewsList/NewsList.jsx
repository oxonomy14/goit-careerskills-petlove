import css from "./NewsList.module.css";
const NewsList = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default NewsList;

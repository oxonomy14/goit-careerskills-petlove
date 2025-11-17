import css from "./Logo.module.css";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={isHomePage ? css.logoHome : css.logo}>
      <Link to="/" className={css.logoLink}>
        <span>petl</span>

        <svg width={19} height={17} className={isHomePage ? css.homeLogoIcon : css.logoIcon}>
          <use href={`/icons/sprite.svg?v=${Date.now()}#icon-heart`}></use>
        </svg>

        <span>ve</span>
      </Link>
    </div>
  );
};

export default Logo;

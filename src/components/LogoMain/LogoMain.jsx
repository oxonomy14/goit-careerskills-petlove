import css from "./LogoMain.module.css";


const LogoMain = () => {


  return (
    <div className={css.logoMain}>
  
        <span>petl</span>

        <svg  className={css.logoMainIcon}>
          <use href={`/icons/sprite.svg#icon-heart`}></use>
        </svg>

        <span>ve</span>
   
    </div>
    
  );
};

export default LogoMain;

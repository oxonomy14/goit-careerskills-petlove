import css from './HeroMain.module.css';


const HeroMain = ({ children }) => {
  return (
    
<>
<section className={css.heroMain}>
{ children }
</section>


</>
  
  );
};

export default HeroMain;
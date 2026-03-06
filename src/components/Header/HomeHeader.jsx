import HomeContainer from '../Container/HomeContainer';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import css from './HomeHeader.module.css';

const Header = ({isMobile, isTablet, isDesktop, isLoggedIn, openMenu}) => {

  return (
    <>
      <HomeContainer>
        <div className={css.header}>
           
          <div className={css.navigation}>
            <Logo />
           {isDesktop && <Nav openMenu={openMenu}/> }
            {isLoggedIn ? <UserNav openMenu={openMenu} isTablet={isTablet} isMobile={isMobile} isDesktop={isDesktop}/> : <AuthNav openMenu={openMenu} isTablet={isTablet} isMobile={isMobile} isDesktop={isDesktop}/>}
          </div>

          <div className={css.headline}>
            
          <h1 className={css.title}>Take good <span className={css.titleCare}>care</span> of
 your small pets</h1> 

         
            <div className={css.headlineItem}>
              <p className={css.text}>
                Choosing a pet for your home is a choice that is meant to enrich
                your life with immeasurable joy and tenderness.
              </p>
            </div>
          </div>
        </div>
      </HomeContainer>
    </>
  );
};

export default Header;

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import DefaultHeader from '../Header/DefaultHeader';
import DefaultContainer from "../Container/DefaultContainer";
//import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import {selectIsLoggedIn} from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';



const DefaultLayout = ({onLogoutClick}) => {
//const loading = false;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
 const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {


  document.body.style.backgroundColor =
    location.pathname === '/' ? '#fff' : '#f9f9f9';

}, [location.pathname]);

  //console.log('isLoggedIn', isLoggedIn);

  return (
    <>
        <DefaultContainer>
      <header>
        <DefaultHeader
         isMobile={isMobile}
          isDesktop={isDesktop}
          isTablet={isTablet}
            isLoggedIn={isLoggedIn}
            onLogoutClick={onLogoutClick}
        />
      </header>

      <main>
       
        <Outlet/>
       
      </main>
    </DefaultContainer>
    </>
  );
};

export default DefaultLayout;

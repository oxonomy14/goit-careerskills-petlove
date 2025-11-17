import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomeHeader from '../Header/HomeHeader';
//import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';



const HomeLayout = () => {
//const loading = false;
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 1280 });

  useEffect(() => {


  document.body.style.backgroundColor =
    location.pathname === '/' ? '#fff' : '#f9f9f9';

}, [location.pathname]);

  return (
    <>

      <header>
        <HomeHeader isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet}/>
      </header>

      <main>
        {/* <Loader loading={loading} /> */}
        <Outlet/>
       
      </main>
    
    </>
  );
};

export default HomeLayout;

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultHeader from '../Header/DefaultHeader';
//import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';



const DefaultLayout = () => {
//const loading = false;
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isTablet = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {


  document.body.style.backgroundColor =
    location.pathname === '/' ? '#fff' : '#f9f9f9';

}, [location.pathname]);

  return (
    <>

      <header>
        <DefaultHeader/>
      </header>

      <main>
        {/* <Loader loading={loading} /> */}
        <Outlet/>
       
      </main>
    
    </>
  );
};

export default DefaultLayout;

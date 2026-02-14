import { Outlet, useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import DefaultHeader from '../Header/DefaultHeader';
import DefaultContainer from "../Container/DefaultContainer";
//import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import {selectIsLoggedIn} from '../../redux/auth/AuthSelector';
import { useSelector } from 'react-redux';



const DefaultLayout = () => {
//const loading = false;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isTablet = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {


  document.body.style.backgroundColor =
    location.pathname === '/' ? '#fff' : '#f9f9f9';

}, [location.pathname]);

  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
        <DefaultContainer>
      <header>
        <DefaultHeader
            isLoggedIn={isLoggedIn}
        />
      </header>

      <main>
        {/* <Loader loading={loading} /> */}
        <Outlet/>
       
      </main>
    </DefaultContainer>
    </>
  );
};

export default DefaultLayout;

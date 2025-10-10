
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';



const Layout = () => {

const loading = false;

  return (
    <>

      <header>
        <Header/>
      </header>

      <main>
        <Loader loading={loading} />
        <Outlet/>
       
      </main>
    
    </>
  );
};

export default Layout;

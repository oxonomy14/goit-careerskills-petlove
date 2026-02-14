import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/AuthOperations';

import { useFakeLoader } from './hooks/useFakeLoader';

import DefaultLayout from './components/Layout/DefaultLayout';
import HomeLayout from './components/Layout/HomeLayout';
import Loader from './components/Loader/Loader';
import HeroMain from './components/HeroMain/HeroMain';
import LogoMain from "./components/LogoMain/LogoMain";
import LoaderMain from './components/LoaderMain/LoaderMain';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {selectToken, selectIsRefreshing} from './redux/auth/AuthSelector';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));

function App() {
const { progress, showLogo } = useFakeLoader();

const dispatch = useDispatch();
const token = useSelector(selectToken);
const isRefreshing = useSelector(selectIsRefreshing);


useEffect(() => {
  if (token) {
    dispatch(refreshUser());
  }

}, [dispatch, token]);

if (isRefreshing) {
  return <Loader />;
}


  
  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="news" element={<NewsPage />} />
          <Route path="register" element={<RegistrationPage />} />
           <Route path="login" element={<LoginPage />} />
              <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          {/* <Route path="cards" element={<CardsPage />} /> */}
          {/* <Route path="cards/:cardId" element={<CardPage />} />
             <Route
            path="favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          /> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  
{progress < 100 && (
  <HeroMain>
    {showLogo ? (
      <LogoMain />
    ) : (
      <LoaderMain percent={progress} />
    )}
  </HeroMain>
)}
      </>
  );
}

export default App;

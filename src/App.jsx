import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/authOperations';

import { useFakeLoader } from './hooks/useFakeLoader';

import DefaultLayout from './components/Layout/DefaultLayout';
import HomeLayout from './components/Layout/HomeLayout';
import Loader from './components/Loader/Loader';
import HeroMain from './components/HeroMain/HeroMain';
import LogoMain from './components/LogoMain/LogoMain';
import LoaderMain from './components/LoaderMain/LoaderMain';
import Favorites from './components/Favorites/Favorites';
import Viewed from './components/Viewed/Viewed';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoticeModalManager from './components/NoticeModalManager/NoticeModalManager';
import { selectToken, selectIsRefreshing } from './redux/auth/authSelector.js';
import { fetchUserFull,logoutUser } from './redux/auth/authOperations';
import ModalApproveAction from './components/ModalApproveAction/ModalApproveAction.jsx'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const RegistrationPage = lazy(
  () => import('./pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'));

const OurFriendsPage = lazy(
  () => import('./pages/OurFriendsPage/OurFriendsPage'),
);
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const AddPetPage = lazy(()=> import('./pages/AddPetPage/AddPetPage'));

function App() {
  const { progress, showLogo } = useFakeLoader();

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

useEffect(() => {
  if (!token) return;

  dispatch(refreshUser())
    .unwrap()
    .then(() => {
      dispatch(fetchUserFull());
    })
    .catch(() => {
      // якщо refresh не пройшов — нічого не робимо
    });

}, [dispatch, token]);
  

  if (isRefreshing) {
    return <Loader />;
  }



const openLogoutModal = () => setIsLogoutModalOpen(true);
const closeLogoutModal = () => setIsLogoutModalOpen(false);

const handleLogout = () => {
  dispatch(logoutUser());
  closeLogoutModal();
};

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<DefaultLayout onLogoutClick={openLogoutModal}/>}>
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage onLogoutClick={openLogoutModal}/>
                  <AddPetPage/>
                </PrivateRoute>
              }
            >
              <Route index element={<Favorites />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="viewed" element={<Viewed />} />
            </Route>
             <Route
              path="/add-pet"
              element={
                <PrivateRoute>
             
                  <AddPetPage/>
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
 <NoticeModalManager />
 <ModalApproveAction
  isOpen={isLogoutModalOpen}
  onConfirm={handleLogout}
  onClose={closeLogoutModal}
/>
      {progress < 100 && (
        <HeroMain>
          {showLogo ? <LogoMain /> : <LoaderMain percent={progress} />}
        </HeroMain>
      )}
    </>
  );
}

export default App;

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from './components/Layout/DefaultLayout';
import HomeLayout from './components/Layout/HomeLayout';
import Loader from './components/Loader/Loader';
//import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
// const CardPage = lazy(() => import('./pages/CardPage/CardPage'));
// const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path="news" element={<NewsPage />} />
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
  );
}

export default App;

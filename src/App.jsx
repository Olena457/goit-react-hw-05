import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Blocks } from 'react-loader-spinner';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('/components/MovieReviews'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));

import './App.css';

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <Blocks
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          }
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;

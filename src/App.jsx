import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardWrapper from './components/CardWrapper';
import styles from './App.module.css';
import HomePage from './pages/HomePage';
import FetchedProfilesPage from './pages/FetchedProfilesPage'; 
import { Routes, Route } from 'react-router-dom';
import useMode from './hooks/useMode';

const LazyAboutPage = lazy(() => import('./pages/About'));
const LazyAddProfilePage = lazy(() => import('./pages/AddProfilePage'));
const LazyProfileDetail = lazy(() => import('./pages/ProfileDetail'));
const LazyNotFound = lazy(() => import('./pages/NotFound'));
 
function App() {
  const { mode } = useMode();
 
     return (
    <div className={`${styles.app} ${styles[mode]}`}>
      <header>
        <Navbar />
      </header>
      <main>
        <CardWrapper id="header" className={styles.cardWrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fetched-profiles" element={<FetchedProfilesPage />} />
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<div>Loading About Page...</div>}>
                  <LazyAboutPage />
                </Suspense>
              } 
            />
            <Route 
              path="/addprofile" 
              element={
                <Suspense fallback={<div>Loading Add Profile Page...</div>}>
                  <LazyAddProfilePage />
                </Suspense>
              } 
            />
            <Route 
              path="/fetched-profiles/profile/:profileId" 
              element={
                <Suspense fallback={<div>Loading Profile Details...</div>}>
                  <LazyProfileDetail />
                </Suspense>
              } 
            />
            <Route 
              path="*" 
              element={
                <Suspense fallback={<div>Loading Not Found Page...</div>}>
                  <LazyNotFound />
                </Suspense>
              } 
            />
          </Routes>
        </CardWrapper>
      </main>
    </div>
  );
}

export default App;
import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import CardWrapper from './components/CardWrapper';
import styles from './App.module.css';
import AddProfilePage from "./pages/AddProfilePage"; 
import HomePage from './pages/HomePage';
import FetchedProfilesPage from './pages/FetchedProfilesPage'; 
import ProfileDetail from './pages/ProfileDetail'; 
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
import ModeContext from './context/ModeContext';
 
function App() {
  const { mode } = useContext(ModeContext);
 
     return (
    <div className={styles.app}>
      <header>
        <Navbar />
      </header>
      <main>
        <CardWrapper id="header" className={styles.cardWrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/addprofile" element={<AddProfilePage />} />
            <Route path="/fetched-profiles" element={<FetchedProfilesPage />}>
              <Route path="profile/:profileId" element={<ProfileDetail />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CardWrapper>
      </main>
    </div>
  );
}

export default App;
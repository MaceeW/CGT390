import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import CardWrapper from './components/CardWrapper';
import styles from './App.module.css';
import AddProfile from "./components/AddProfile"; 
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode === 'dark' ? styles.darkMode : styles.lightMode;
    return () => { document.body.className = ''; };
  }, [mode]);
 
   return (
    <div className={styles.app}>
      <header>
        <Navbar mode={mode} setMode={setMode} />
      </header>
      <main>
        <CardWrapper id="header" className={styles.cardWrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/addprofile" element={<AddProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CardWrapper>
      </main>
    </div>
  );
}

export default App;
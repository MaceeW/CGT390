import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Card from './components/Card'
import CardWrapper from './components/CardWrapper'
import Filters from './components/Filters'
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.webp"
import img3 from "./assets/img3.jpeg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import img6 from "./assets/img6.jpg"
import Search from './components/Search';
import styles from './App.module.css'

function App() {
  const profiles = [
    {name: "John", title: "Software Engineer", email: "john@example.com", img: img2},
    {name: "Jane", title: "Product Manager", email: "jane@example.com", img: img1},
    {name: "Charlie", title: "Software Engineer", email: "charlie@example.com", img: img4},
    {name: "Dan", title: "UX Designer", email: "dan@example.com", img: img5},
    {name: "Alice", title: "Project Manager", email: "alice@example.com", img: img6},
    {name: "Bob", title: "Software Engineer", email: "bob@example.com", img: img3}
  ]

  const [mode, setMode] = useState('light');
  const uniqueTitles = [...new Set(profiles.map(profile => profile.title))];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTitle, setFilterTitle] = useState("");

  const handleReset = () => {
    setSearchTerm("");
    setFilterTitle("");
  };

  const filteredProfiles = profiles.filter(profile => {
    const nameMatch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const titleMatch = filterTitle === "" || profile.title === filterTitle;
    return nameMatch && titleMatch;
  });

  useEffect(() => {
    document.body.className = mode === 'dark' ? styles.darkMode : styles.lightMode;
    return () => {
      document.body.className = '';
    };
  }, [mode, styles.darkMode, styles.lightMode]);

   return (
    <div className={styles.app}>
      <header>
        <Navbar mode={mode} setMode={setMode} />
      </header>
      <main>
        <CardWrapper id="header" className={styles.cardWrapper}>
          <h1>Profile App</h1>
        </CardWrapper>
        <CardWrapper id="about" className={styles.cardWrapper}>
          <About />
        </CardWrapper>
        <CardWrapper id="profiles" className={styles.cardWrapper}>
          <div className={styles.controls}>
            <Search 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              handleReset={handleReset} />
            <Filters 
              titles={uniqueTitles} 
              filterTitle={filterTitle} 
              setFilterTitle={setFilterTitle} />
          </div>
          <div className={styles.flexContainer}>
            {
              filteredProfiles.map((profile) => (
                <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
              ))
            }
          </div>
        </CardWrapper>
      </main>
    </div>
  );
}

export default App;
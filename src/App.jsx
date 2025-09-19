import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Card from './components/Card'
import CardWrapper from './components/CardWrapper'
import Filters from './components/Filters'
import Search from './components/Search';
import styles from './App.module.css'
import AddProfile from "./components/AddProfile"; 
 
function App() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("")
  const [search, setSearch] = useState("")
  const [mode, setMode] = useState("light")
  
  useEffect(() => {
    fetch('https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php')
      .then(response => response.json())
      .then(data => setProfiles(data))
      .catch(error => console.error('Error fetching profiles:', error));

    fetch('https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php')
      .then(response => response.json())
      .then(data => setTitles(data.titles))
      .catch(error => console.error('Error fetching titles:', error));
  }, []);
  
  const changeMode = () => {
    setMode(mode==="dark"?"light":"dark")
  }
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const handleClick = () => {
    setTitle("")
    setSearch("")
  }
  const filteredProfiles = profiles.filter(profile => 
    (!title || profile.title===title) && profile.name.toLowerCase().includes(search.toLowerCase())
  )

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
          <h1>Profile App</h1>
        </CardWrapper>
        <CardWrapper id="about" className={styles.cardWrapper}>
          <About />
        </CardWrapper>
        <CardWrapper id="profiles" className={styles.cardWrapper}>
          <div className={styles.controls}>
            <Search 
              searchTerm={search}
              onSearchChange={handleSearch}
              onReset={handleClick} />
            <Filters 
              titles={titles}
              selectedTitle={title}
              onTitleChange={handleChange} />
          </div>
          <div className={styles.flexContainer}>
            {
              filteredProfiles.map((profile) => (
                <Card key={profile.id} name={profile.name} title={profile.title} email={profile.email} img={profile.image_url} />
              ))
            }
          </div>
        </CardWrapper>
        <CardWrapper id="add-profile" className={styles.cardWrapper}>
          <AddProfile />
        </CardWrapper>
      </main>
    </div>
  );
}

export default App;
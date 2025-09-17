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
import AddProfile from "./components/AddProfile"; 
 
function App() {
  const profiles = [
    {name: "John", title: "Software Engineer", email: "john@example.com", img: img2},
    {name: "Jane", title: "Product Manager", email: "jane@example.com", img: img1},
    {name: "Charlie", title: "Software Engineer", email: "charlie@example.com", img: img4},
    {name: "Dan", title: "UX Designer", email: "dan@example.com", img: img5},
    {name: "Alice", title: "Project Manager", email: "alice@example.com", img: img6},
    {name: "Bob", title: "Software Engineer", email: "bob@example.com", img: img3}
  ]
 
  const titles = [...new Set(profiles.map(profile => profile.title))]
  const [title, setTitle] = useState("")
  const [search, setSearch] = useState("")
  const [mode, setMode] = useState("light")

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
                <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
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
import { useState } from 'react';
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

function App() {
  const profiles = [
    {name: "John", title: "Software Engineer", email: "john@example.com", img: img2},
    {name: "Jane", title: "Product Manager", email: "jane@example.com", img: img1},
    {name: "Charlie", title: "Software Engineer", email: "charlie@example.com", img: img4},
    {name: "Dan", title: "UX Designer", email: "dan@example.com", img: img5},
    {name: "Alice", title: "Project Manager", email: "alice@example.com", img: img6},
    {name: "Bob", title: "Software Engineer", email: "bob@example.com", img: img3}
  ]

  const uniqueTitles = [...new Set(profiles.map(profile => profile.title))];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTitle, setFilterTitle] = useState("All");

  const handleReset = () => {
    setSearchTerm("");
    setFilterTitle("All");
  };

  const filteredProfiles = profiles.filter(profile => {
    const nameMatch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const titleMatch = filterTitle === "All" || profile.title === filterTitle;
    return nameMatch && titleMatch;
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CardWrapper id="header">
          <h1>Profile App</h1>
        </CardWrapper>
        <CardWrapper id="about">
             <About />
        </CardWrapper>
        <CardWrapper id="profiles">
             <div className="controls">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleReset={handleReset} />
                <Filters titles={uniqueTitles} filterTitle={filterTitle} setFilterTitle={setFilterTitle} />
             </div>
             <div className="flex-container">
              {
                filteredProfiles.map((profile) => (
                  <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
                ))
              }   
              </div>
        </CardWrapper>
      </main>
           
    </>
  )
}

export default App;
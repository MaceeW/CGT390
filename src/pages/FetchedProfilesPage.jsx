import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Filters from '../components/Filters';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import Search from '../components/Search';
import styles from '../App.module.css';
import { Outlet } from 'react-router-dom'; 

const FetchedProfilesPage = () => {
    const profiles = [
      {id: "2", name: "John", title: "Software Engineer", email: "john@example.com", img: img2},
      {id: "1", name: "Jane", title: "Product Manager", email: "jane@example.com", img: img1},
      {id: "4", name: "Charlie", title: "Software Engineer", email: "charlie@example.com", img: img4},
      {id: "5", name: "Dan", title: "UX Designer", email: "dan@example.com", img: img5},
      {id: "6", name: "Alice", title: "Project Manager", email: "alice@example.com", img: img6},
      {id: "3", name: "Bob", title: "Software Engineer", email: "bob@example.com", img: img3}
    ];
  
    const titles = [...new Set(profiles.map(profile => profile.title))];
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");
  
    const handleChange = (event) => {
      setTitle(event.target.value);
    };
  
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
  
    const handleClick = () => {
      setTitle("");
      setSearch("");
    };
  
    const filteredProfiles = profiles.filter(profile => 
      (!title || profile.title === title) && profile.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <>
        <h1>Fetched Profiles</h1>
        <div className={styles.controls}>
          <Search 
            searchTerm={search}
            onSearchChange={handleSearch}
            onReset={handleClick} 
          />
          <Filters 
            titles={titles}
            selectedTitle={title}
            onTitleChange={handleChange} 
          />
        </div>
        <div className={styles.flexContainer}>
          {
            filteredProfiles.map((profile) => (
              <Card 
                key={profile.email} 
                id={profile.id} 
                title={profile.title} 
                email={profile.email} 
                img={profile.img} 
              />
            ))
          }
        </div>
        <Outlet /> 
      </>
    );
  };
  
  export default FetchedProfilesPage;
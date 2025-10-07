import { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import Filters from '../components/Filters';
import Search from '../components/Search';
import styles from '../App.module.css';
import { Outlet } from 'react-router-dom'; 

const FetchedProfilesPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfiles = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
        const url = new URL('https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php');
        url.searchParams.append('limit', 10);
        if (title) url.searchParams.append('title', title);
        if (search) url.searchParams.append('name', search);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfiles(Array.isArray(data.profiles) ? data.profiles : []);
      } catch (e) {
        setError("Failed to fetch profiles.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, [title, search]); 

    useEffect(() => {
      fetchProfiles();
    }, [fetchProfiles]);

    useEffect(() => {
      const fetchTitles = async () => {
        try {
          const response = await fetch('https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php');
          const data = await response.json();
          setTitles(Array.isArray(data.titles) ? data.titles : []);
        } catch (e) {
          console.error("Failed to fetch titles:", e);
        }
      };
      fetchTitles();
    }, []);

    const handleChange = useCallback((event) => {
      setTitle(event.target.value);
    }, []); 

    const handleSearch = useCallback((event) => {
      setSearch(event.target.value);
    }, []); 

    const handleClick = useCallback(() => {
      setTitle("");
      setSearch("");
    }, []); 

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
        {loading && <div>Loading profiles...</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className={styles.flexContainer}>
          {
            !loading && !error && profiles.map((profile) => (
              <Card
                key={profile.id}
                id={profile.id}
                name={profile.name}
                title={profile.title}
                email={profile.email}
                img={profile.image_url}
              />
            ))
          }
        </div>
        <Outlet />
      </>
    );
  };
  
  export default FetchedProfilesPage;
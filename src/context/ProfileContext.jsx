import { createContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchInitialProfiles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfiles(Array.isArray(data) ? data : []);
      } catch (e) {
        setError("Failed to fetch initial profiles.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialProfiles();
  }, []);

  const addProfile = (newProfileData) => {
    const newId = String(Date.now());
    const newProfile = {
      ...newProfileData,
      id: newId,
      image_url: 'https://via.placeholder.com/150', 
      bio: newProfileData.bio || "No bio provided.", 
    };
    setProfiles((prevProfiles) => [newProfile, ...prevProfiles]);
  };

  const getProfileById = (id) => {
    return profiles.find(p => p.id === id);
  };

  const contextValue = {
    profiles,
    addProfile,
    getProfileById,
    loading,
    error,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
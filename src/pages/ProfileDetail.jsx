import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProfileDetail = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${profileId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data) {
          setProfile(data);
        } else {
          setError("Profile not found.");
        }
      } catch (e) {
        setError("Failed to fetch profile data. " + e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  if (loading) return <div>Loading Profile Details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data to display.</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'left', marginTop: '20px', borderTop: '1px solid var(--card-border)' }}>
      <h2>{profile.name} - Profile Details (ID: {profileId})</h2>
      <p><strong>Title:</strong> {profile.title}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
};

export default ProfileDetail;
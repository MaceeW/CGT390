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
        console.log(`Attempting to fetch profile details for ID: ${profileId} from API: https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${profileId}`);
        
        const mockData = [
          {id: "2", name: "John", title: "Software Engineer", email: "john@example.com", bio: "Skilled React developer."},
          {id: "1", name: "Jane", title: "Product Manager", email: "jane@example.com", bio: "Strategist with a focus on user experience."},
          {id: "4", name: "Charlie", title: "Software Engineer", email: "charlie@example.com", bio: "Backend expert and data enthusiast."},
          {id: "5", name: "Dan", title: "UX Designer", email: "dan@example.com", bio: "Visual and interaction design guru."},
          {id: "6", name: "Alice", title: "Project Manager", email: "alice@example.com", bio: "Manages projects with precision and care."},
          {id: "3", name: "Bob", title: "Software Engineer", email: "bob@example.com", bio: "Front-end specialist and component architect."}
        ];
        
        const foundProfile = mockData.find(p => p.id === profileId);

        if (foundProfile) {
          setProfile(foundProfile);
        } else {
          setError("Profile not found.");
        }
      } catch (e) {
        setError("Failed to fetch profile data.");
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
      <p style={{ fontSize: '0.8rem', opacity: '0.7' }}>
        <em>(Note: Data is mocked for demonstration. In a real app, data for ID {profileId} would be fetched from: https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id={profileId})</em>
      </p>
    </div>
  );
};

export default ProfileDetail;
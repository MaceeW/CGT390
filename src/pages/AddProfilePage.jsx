import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileContext from '../context/ProfileContext';
import '../styles/addProfile.css';

const AddProfilePage = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const { addProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !title || !email) {
      alert('Please fill in all required fields.');
      return;
    }
    addProfile({ name, title, email, bio });
    navigate('/fetched-profiles');
  };

  return (
    <div className="add-profile">
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfilePage;

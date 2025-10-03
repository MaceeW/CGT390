import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContext from "../context/ProfileContext";
import styles from "../styles/addProfile.module.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return { name: '', title: '', email: '', bio: '' };
    default:
      return state;
  }
};

const AddProfilePage = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    title: '',
    email: '',
    bio: '',
  });
  const { addProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, title, email, bio } = formState;

    const newProfile = {
      id: Date.now(),
      name,
      title,
      email,
      bio,
      image_url: "https://via.placeholder.com/150",
    };

    addProfile(newProfile);
    dispatch({ type: 'RESET_FORM' });
    navigate("/fetched-profiles");
  };

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formState.title} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" value={formState.bio} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfilePage;

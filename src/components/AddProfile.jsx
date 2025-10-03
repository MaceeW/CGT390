import { useRef, useLayoutEffect } from "react";
import styles from '../styles/addProfile.module.css';
import { useFormReducer } from "./formReducer.js";

const AddProfile = () => {
  const { state, handleChange, handleSubmit } = useFormReducer();
  const { values } = state;
  const { name, title, email, bio } = values;

  const nameRef = useRef(null);
  useLayoutEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className={styles.formContainer}>
      <h2>Add Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="John Doe" value={name} onChange={handleChange} required ref={nameRef} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" id="title" placeholder="Example: Software Engineer" value={title} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="example@gmail.com" value={email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" id="bio" placeholder="Add Bio..." value={bio} onChange={handleChange}></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="img">Image:</label>
          <input type="file" name="img" id="img" onChange={handleChange} accept="image/*" />
        </div>
        <button type="submit" className={styles.submitButton}>Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fetched-profiles">Profiles</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/addprofile">Add Profile</Link></li>
      </ul>
      <button onClick={toggleMode} className={styles.modeButton}>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
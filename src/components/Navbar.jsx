import styles from './navbar.module.css';

const Navbar = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#profiles">Profiles</a></li>
      </ul>
      <button onClick={toggleMode} className={styles.modeButton}>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
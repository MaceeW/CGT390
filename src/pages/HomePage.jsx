import styles from '../App.module.css';

const HomePage = () => {
    return (
      <div className={styles.homeContainer}>
        <h1>Welcome to the Profile App</h1>
        <p>Use the navigation bar to view the profiles list or add a new profile.</p>
        <p>The profile listing functionality has been moved to the <a href="#/fetched-profiles">Profiles</a> page to accommodate the dynamic and nested routing requirement of Lab 10.</p>
      </div>
    );
  };
  
  export default HomePage;
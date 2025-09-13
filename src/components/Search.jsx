import styles from './Search.module.css';

const Search = ({ searchTerm, handleReset, setSearchTerm }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <button onClick={handleReset} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
};

export default Search;
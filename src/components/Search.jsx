import styles from './search.module.css';

const Search = ({ searchTerm, onSearchChange, onReset }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={onSearchChange}
        className={styles.searchInput}
      />
      <button onClick={onReset} className={styles.resetButton}>Reset</button>
    </div>
  );
};

export default Search;
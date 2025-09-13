import styles from './filters.module.css';

const Filters = ({ titles, filterTitle, setFilterTitle }) => {

   return (
    <div className={styles.filtersContainer}>
      <label htmlFor="title-filter" className={styles.filterLabel}>
        Filter by Title:
      </label>
      <select 
        id="title-filter" 
        onChange={(e) => setFilterTitle(e.target.value)} 
        value={filterTitle}
        className={styles.filterSelect}
      >
        <option value="">All Titles</option>
        {titles.map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
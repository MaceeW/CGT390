const Search = ({ searchTerm, setSearchTerm, handleReset }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <button onClick={handleReset} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default Search;

const Filters = ({ titles, filterTitle, setFilterTitle }) => {
  return (  
    <div className="filter container">
        <div className="select-filter">
            <label htmlFor="select">Select A Title:</label>
            <select
              id="select"
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
              className="filter-dropdown"
            >
              <option value="All">All Titles</option>
              {titles.map(title => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
        </div>
    </div>
    )
}

export default Filters;
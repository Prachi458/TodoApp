import React from "react";

const Search = ({
  searchText,
  setSearchText,
}) => {
  const searchHandler = (event) => {
    let val = event.target.value;
    setSearchText(val);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Todos..."
        className="search-class"
        onChange={(e) => searchHandler(e)}
        value={searchText}
      />
    </div>
  );
};
export default Search;

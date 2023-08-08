// SearchInput.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      history.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
